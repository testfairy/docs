
## Installation

The steps in this section are an example of how to add the TestFairy Unity SDK to your Unity project.

1. From the TestFairy Unity SDK GitHub page, download the [latest](https://github.com/testfairy/testfairy-unity-plugin/releases) version of the `unitypackage`.
   ![download-latest](/img/unity/unity-latest.png)

2. In your open Unity project, navigate to **Assets** --> **Import Package** --> **Custom Package**

  ![custom-import](/img/unity/custom-import.png)

3. In the Import Unity Package window, first click **All** to include the TestFairy SDK in your app. Then click **Import**.
   ![select-files](/img/unity/file-select.png)

4. To use the TestFairy Unity SDK, click `mainCamera` in Hierarchy and in the Inspector click `Add Component`. 
	> **Note:** you can add the TestFairy script to any game object. TestFairy is a singleton so no harm is done.

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

## Exporting Ad-hoc or Production Builds for iOS

When building your Unity project for iOS, a few extra steps are required. 

The TestFairy SDK for Unity includes architectures for both Simulator and Device. However, Apple does not allow you to package an App for a device that includes a library with Simulator architectures.

In order to remove those architectures from your project during your iOS build, add a new file named `TestFairyBuildPostProcessor.cs` in your `Editor` directory with the following contents.

> **Note**: This script can also be used when building your iOS project using Unity Build.

![post-build-script](/img/unity/post-build-script.png)

```
using UnityEngine;
using UnityEditor;
using System.Collections;
using System.IO;

using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;

public class TestFairyBuildPostProcessor {
  [PostProcessBuildAttribute(1)]
  public static void OnPostprocessBuild(BuildTarget buildTarget, string path) {
    if (buildTarget == BuildTarget.iOS) {
      string projPath = path + "/Unity-iPhone.xcodeproj/project.pbxproj";

      PBXProject proj = new PBXProject();
      proj.ReadFromString(File.ReadAllText(projPath));
      var mainTarget = proj.GetUnityMainTargetGuid();

      proj.AddShellScriptBuildPhase(mainTarget, "Strip unused architectures", "", "sh Frameworks/Plugins/iOS/TestFairy.framework/strip-architectures.sh");

      File.WriteAllText(projPath, proj.WriteToString());
    }
  }
}

```

### Possible errors and solutions

If you omit adding the above script, you may encounter the following errors:

> ERROR ITMS-90087: "Unsupported Architectures. The executable TestFairy.framework contains unsupported architectures '[x86_64, i386]'

This happens when you export your iOS app for the App store. The App Store only supports apps built for the ARM architecture, however to allow developers to also test in the iOS Simulator, we include the architectures for 64-bit (x86_64) and 32-bit (i386) Intel architectures.

> Error: exportArchive: IPA processing failed
> Error Domain=IDEFoundationErrorDomain Code=1 "IPA processing failed" UserInfo={NSLocalizedDescription=IPA processing failed}

This happens when you export an Ad hoc version of your iOS app. Most often seen in Unity Cloud build.

### Identifying your users

See the [SDK Documentation](https://docs.testfairy.com/SDK/Identifying_Your_Users.html#unity) for more information.

### Session Attributes

See the [SDK Documentation](https://docs.testfairy.com/SDK/Session_Attributes.html#unity) for more information.

### Remote Logging

See the [SDK Documentation](https://docs.testfairy.com/SDK/Remote_Logging.html#unity) for more information.
