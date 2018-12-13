
## Installation

1. Download the latest [TestFairy plugin for Unity](https://github.com/testfairy/testfairy-unity-plugin/releases).

2. Unpack the zip on your disk.

3. Drag **TestFairy.cs**, **iOS** and **Android** into your Project under `Assets/Plugins`. If you don't have Plugins, you can drag the entire folder onto your project.

  ![Step 1](https://raw.githubusercontent.com/testfairy/testfairy-unity-plugin/master/Images/step1.png)

4. Press `mainCamera` in Hierarchy and in the Inspector click  `Add Component`. Note: you can add the TestFairy script to any game object. TestFairy is a singleton so no harm is done.

  ![Step 2](https://raw.githubusercontent.com/testfairy/testfairy-unity-plugin/master/Images/step2.png)

5. Type in the name of the script, for example `mainCameraScript`, choose `CSharp` and click on `Create and Add`.

  ![Step 3](https://raw.githubusercontent.com/testfairy/testfairy-unity-plugin/master/Images/step3.png)

6. Edit the newly created CSharp script, add `using TestFairyUnity;` to the import section, and a call to `TestFairy.begin()` with your app token. You can find your app token in the [Account Settings](https://app.testfairy.com/settings/#apptoken) page.

  ![Step 4](https://raw.githubusercontent.com/testfairy/testfairy-unity-plugin/master/Images/step4.png)

 Here is the code, for easy copy-pasting:

 ```
 using UnityEngine;
 using System.Collections;
 using TestFairyUnity;

 public class mainCameraScript : MonoBehaviour {

     // Use this for initialization
     void Start () {
         TestFairy.begin("PUT YOUR SDK APP TOKEN HERE SEE COMMENT ABOVE");
     }

     ...
 }
 ```

7. As minimum, TestFairy requires the `INTERNET` and `ACCESS_NETWORK_STATE` permission for your Android build. You can copy a version of your AndroidManifest.xml from `<root>/Temp/StagingArea/AndroidManifest.xml` into the `<root>/Assets/Plugin/Android` directory. From here, edit `AndroidManifest.xml` with the following line:

 ```xml
 <uses-permission android:name="android.permission.INTERNET" />
 <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
 <application>
	<activity
			 android:name="com.testfairy.activities.ProvideFeedbackActivity"
			 android:configChanges="orientation|screenSize"
			 android:theme="@android:style/Theme.Holo.Light"/>
	<activity
			 android:name="com.testfairy.activities.AutoUpdateActivity"
			 android:configChanges="orientation|screenSize"/>
</application>
 ```

8. Save, build and run.

## Usage

### Setting Screen Name

TestFairy can capture screenshots during a recorded session. It attempts to autmatically name a screenshot based on different measures. In order to override this you can invoke `setScreenName`, and set your own name for a captured screen. `setScreenName` expects a String, so developers are free to label screenshots with any appropriate label. Some developers make use of the level name to set the screenshot, for example:

```
using UnityEngine;
using System.Collections;
using TestFairyUnity;
using UnityEngine.SceneManagement;

public class cameraScript : MonoBehaviour {
...
	void OnLevelWasLoaded(int level) {
		TestFairy.setScreenName(Application.loadedLevelName);
	}
...
}
```

### Identifying your users

See the [SDK Documentation](https://docs.testfairy.com/SDK/Identifying_Your_Users.html#unity) for more information.

### Session Attributes

See the [SDK Documentation](https://docs.testfairy.com/SDK/Session_Attributes.html#unity) for more information.

### Remote Logging

See the [SDK Documentation](https://docs.testfairy.com/SDK/Remote_Logging.html#unity) for more information.
