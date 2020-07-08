Integrating TestFairy SDK the default way guarantees that all TestFairy classes will be available during app launch. For apps that require strict control of CPU timing and memory consumption, this may create an undesirable side-effect of launch delay and unwanted memory allocations.

If your use case requires more control on when and how the SDK loads into memory, this is made possible by including the SDK as an asset instead of a build dependency. This asset can be embedded into the app or can be fetched from Google Play as an [APK Expansion File](https://developer.android.com/google/play/expansion-files) during runtime. Google Play **highly restricts** where an executable library can be downloaded from. Make sure you read the entire [Google Play Developer Policy](https://support.google.com/googleplay/android-developer/answer/9904549) before you decide if this is the right way to proceed for your app.

## Installation

Here, we are going to embed the SDK as an offline JAR asset.

* Download the latest SDK from [Bintray](https://bintray.com/testfairy/testfairy/testfairy/_latestVersion). Make sure you download the one with the JAR extension.

* Run the following command in the Android SDK directory to convert the downloaded JAR file into its appropriate format. Replace "x.y.z" and "a.b.c" with the applying version numbers.

```
build-tools/x.y.z/dx --dex --output testfairy.jar testfairy-android-sdk-a.b.c.jar
```

* Copy the resulting **testfairy.jar** file into **src/main/assets** directory.

* Add the SDK as a compile time dependency to enable static type checking.

```
// in app's build.gradle

dependencies {
    compileOnly 'testfairy:testfairy-android-sdk:a.b.c@aar'
}
```

* Copy the following utilities into your application or main activity class.

```
	/**
	 * Finds 'testfairy.jar' in the assets and copy it into code cache directory
	 *
	 * @param context
	 * @return
	 * @throws ClassNotFoundException
	 * @throws IOException
	 * @throws NoSuchFieldException
	 * @throws IllegalAccessException
	 */
	private static Class<?> loadTestFairyDynamically(Context context)
			throws ClassNotFoundException, IOException, NoSuchFieldException, IllegalAccessException {
		// Decide where to store dex files
		File codeCacheDir = context.getApplicationContext().getCodeCacheDir();
		String internalPath = codeCacheDir.getAbsolutePath() + File.separator + "testfairy." + BuildConfig.VERSION_CODE + ".jar";
		File desFile = new File(internalPath);

		// If this is the first time we load TestFairy for this build, delete old SDKs and copy the new one to the cache
		if (!desFile.exists()) {
			File[] fairies = codeCacheDir.listFiles(new FilenameFilter() {
				@Override
				public boolean accept(File dir, String name) {
					return name.contains("testfairy");
				}
			});

			for (File oldJar : fairies) {
				oldJar.delete();
			}

			AssetManager am = context.getAssets();
			InputStream originalStream = am.open("testfairy.jar");

			Files.copy(originalStream, desFile.toPath());
		}

		// Prepare SDK class loader
		DexClassLoader dexClassLoader = new DexClassLoader(
				internalPath,
				codeCacheDir.getAbsolutePath(),
				null,
				context.getClassLoader()
		);

		// Add TestFairy to default list of loaded dex files (thanks nickcaballero@github)
		if (context.getClassLoader() instanceof BaseDexClassLoader) {
			Object existing = getDexClassLoaderElements((BaseDexClassLoader) context.getClassLoader());
			Object incoming = getDexClassLoaderElements(dexClassLoader);
			Object joined = joinArrays(incoming, existing);
			setDexClassLoaderElements((BaseDexClassLoader) context.getClassLoader(), joined);
		} else {
			throw new UnsupportedOperationException("Class loader not supported");
		}

		// Load the SDK
		return dexClassLoader.loadClass("com.testfairy.TestFairy");
	}

	/**
	 * Sets new paths of elements to the class loaders list of dex files.
	 * @param classLoader
	 * @param elements
	 * @throws NoSuchFieldException
	 * @throws IllegalAccessException
	 */
	private static void setDexClassLoaderElements(BaseDexClassLoader classLoader, Object elements)
			throws NoSuchFieldException, IllegalAccessException {
		Class<BaseDexClassLoader> dexClassLoaderClass = BaseDexClassLoader.class;
		Field pathListField = dexClassLoaderClass.getDeclaredField("pathList");
		pathListField.setAccessible(true);
		Object pathList = pathListField.get(classLoader);
		Field dexElementsField = pathList.getClass().getDeclaredField("dexElements");
		dexElementsField.setAccessible(true);
		dexElementsField.set(pathList, elements);
	}

	/**
	 * Gets the current path of elements from a class loader.
	 * @param classLoader
	 * @return
	 * @throws NoSuchFieldException
	 * @throws IllegalAccessException
	 */
	private static Object getDexClassLoaderElements(BaseDexClassLoader classLoader)
			throws NoSuchFieldException, IllegalAccessException {
		Class<BaseDexClassLoader> dexClassLoaderClass = BaseDexClassLoader.class;
		Field pathListField = dexClassLoaderClass.getDeclaredField("pathList");
		pathListField.setAccessible(true);
		Object pathList = pathListField.get(classLoader);
		Field dexElementsField = pathList.getClass().getDeclaredField("dexElements");
		dexElementsField.setAccessible(true);
		Object dexElements = dexElementsField.get(pathList);
		return dexElements;
	}

	/**
	 * Merges arrays if runtime types match in a reflection friendly manner.
	 * @param o1
	 * @param o2
	 * @return
	 */
	private static Object joinArrays(Object o1, Object o2) {
		Class<?> o1Type = o1.getClass().getComponentType();
		Class<?> o2Type = o2.getClass().getComponentType();

		if (o1Type != o2Type)
			throw new IllegalArgumentException();

		int o1Size = Array.getLength(o1);
		int o2Size = Array.getLength(o2);
		Object array = Array.newInstance(o1Type, o1Size + o2Size);

		int offset = 0, i;
		for (i = 0; i < o1Size; i++, offset++)
			Array.set(array, offset, Array.get(o1, i));
		for (i = 0; i < o2Size; i++, offset++)
			Array.set(array, offset, Array.get(o2, i));

		return array;
	}
```

* Load the library and initialize a session. Replace **APP_TOKEN** with the one you copy from TestFairy dashboard.

```
/**
 * A simple wrapper for TestFairy.begin(), loads the class into memory on demand instead of during app launch.
 * @param context An Activity or Application context
 * @param token Your TestFairy app token
 */
private static void begin(Context context, String token) {
	try {
		Class<?> testfairyClass = null;
		try {
			// Use this class if you prefer reflection to interact with the SDK.
			testfairyClass = loadTestFairyDynamically(context);

			// This line will work because we added the SDK to the default list of dex files.
			TestFairy.begin(context, token);
		} catch (NoClassDefFoundError e) {
			// If we reach here, it means the SDK is loaded but reflection is the only way to interact it.
			// This will happen if the device manufacturer disables priviledges to modify default list of loaded dexs.
			if (testfairyClass != null) {
				testfairyClass.getDeclaredMethod("begin", Context.class, String.class)
						.invoke(null, context, token);
			}
		}
	} catch (Throwable t) {
		Log.e("MainActivity", "Error loading TestFairy jar", t);
	}
}

@Override
protected void onCreate(Bundle savedInstanceState) {
	super.onCreate(savedInstanceState);
	setContentView(R.layout.activity_main);

	begin(this, "APP_TOKEN");
}
```

* Checkout [this sample application](https://github.com/testfairy-blog/TestFairyDynamicLoading) to see it in action.
