
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

7. Save, build and run.

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

### Log your exceptions
If you would like to capture exception logs and send them to the TestFairy dashbord use this code example:

```
public string output = "";
public string stack = "";
private void OnEnable()
{
	Application.logMessageReceived += HandleLog;
}
private void OnDisable()
{
	Application.logMessageReceived -= HandleLog;
}
private void HandleLog(string logString, string stackTrace, LogType type)
{
	output = logString;
	stack = stackTrace;
	TestFairy.log(output);
	TestFairy.log(stack);
}
```

## ERROR ITMS-90087: "Unsupported Architectures. The executable TestFairy.framework contains unsupported architectures '[x86_64, i386]'
This happens when you export your iOS app for the App store. The App Store only supports apps built for the ARM architecture, however to allow developers to also test in the iOS Simulator, we include the architectures for 64-bit (x86_64) and 32-bit (i386) Intel architectures.

The quickest solution is to strip these architectures from `TestFairy.framework` when archiving. You must add the following run script to your Xcode build phases.

```
APP_PATH="${TARGET_BUILD_DIR}/${WRAPPER_NAME}"

find "$APP_PATH" -name 'TestFairy.framework' -type d | while read -r FRAMEWORK
do
    FRAMEWORK_EXECUTABLE_NAME=$(defaults read "$FRAMEWORK/Info.plist" CFBundleExecutable)
    FRAMEWORK_EXECUTABLE_PATH="$FRAMEWORK/$FRAMEWORK_EXECUTABLE_NAME"
    echo "Executable is $FRAMEWORK_EXECUTABLE_PATH"
    echo $(lipo -info "$FRAMEWORK_EXECUTABLE_PATH")

    FRAMEWORK_TMP_PATH="$FRAMEWORK_EXECUTABLE_PATH-tmp"

    if $(lipo "$FRAMEWORK_EXECUTABLE_PATH" -verify_arch "i386") ; then
        lipo -output "$FRAMEWORK_TMP_PATH" -remove "i386" "$FRAMEWORK_EXECUTABLE_PATH"
        echo "    i386 architecture removed"
        rm "$FRAMEWORK_EXECUTABLE_PATH"
        mv "$FRAMEWORK_TMP_PATH" "$FRAMEWORK_EXECUTABLE_PATH"
    fi

    if $(lipo "$FRAMEWORK_EXECUTABLE_PATH" -verify_arch "x86_64") ; then
        lipo -output "$FRAMEWORK_TMP_PATH" -remove "x86_64" "$FRAMEWORK_EXECUTABLE_PATH"
        echo "    x86_64 architecture removed"
        rm "$FRAMEWORK_EXECUTABLE_PATH"
        mv "$FRAMEWORK_TMP_PATH" "$FRAMEWORK_EXECUTABLE_PATH"
    fi
done
```

> **Note**: It's important that you only run this script during **only when installing**. The image below shows the necessary checkbox to prevent this script from running during regular development builds

![only-when-archiving](/img/only-when-installing.png)

### Identifying your users

See the [SDK Documentation](https://docs.testfairy.com/SDK/Identifying_Your_Users.html#unity) for more information.

### Session Attributes

See the [SDK Documentation](https://docs.testfairy.com/SDK/Session_Attributes.html#unity) for more information.

### Remote Logging

See the [SDK Documentation](https://docs.testfairy.com/SDK/Remote_Logging.html#unity) for more information.
