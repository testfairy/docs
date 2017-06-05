
## Installation

1. Download the latest [TestFairy plugin for Unity](https://github.com/testfairy/testfairy-unity-plugin/releases).

2. Unpack the zip on your disk.
 
3. Drag **TestFairy.cs**, **iOS** and **Android** into your Project under `Assets/Plugins`. If you don't have Plugins, you can drag the entire folder onto your project.

  ![Step 1](https://raw.githubusercontent.com/testfairy/testfairy-unity-plugin/master/Images/step1.png)
  
4. Open `mainCamera` in Inspector by clicking on it, and then click on `Add Component`. Note: you can add TestFairy script to any game object. TestFairy is a singleton so no harm is done.

  ![Step 2](https://raw.githubusercontent.com/testfairy/testfairy-unity-plugin/master/Images/step2.png)
  
5. Type in the name of the script, for example `mainCameraScript`, choose `CSharp` and click on `Create and Add`.

  ![Step 3](https://raw.githubusercontent.com/testfairy/testfairy-unity-plugin/master/Images/step3.png)
  
6. Edit the newly created CSharp script, and add `using TestFairyUnity;` to the import section, and a call to `TestFairy.begin()` with your app token. You can find your app token in  [Account Settings](https://app.testfairy.com/settings/#apptoken) page.

  ![Step 4](https://raw.githubusercontent.com/testfairy/testfairy-unity-plugin/master/Images/step4.png)

 Here is the code again, for easy copy-pasting:
 
 ```
 using UnityEngine;
 using System.Collections;
 using TestFairyUnity;
 
 public class mainCameraScript : MonoBehaviour {
 
     // Use this for initialization
     void Start () {
         TestFairy.begin(PUT YOUR SDK APP TOKEN HERE SEE COMMENT ABOVE);
     }
 
     ...
 }
 ```
  
7. At minimum, TestFairy requires the `INTERNET` and `ACCESS_NETWORK_STATE` permission for your Android build. You can copy a version of your AndroidManifest.xml from `<root>/Temp/StagingArea/AndroidManifest.xml` into `<root>/Assets/Plugin/Android` directory. From here, edit `AndroidManifest.xml` with the following line

 ```xml
 <uses-permission android:name="android.permission.INTERNET" />
 <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
 <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
 ```
 
 Additional features may require extra persmissions given below
 
 ```xml
 <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
 <uses-permission android:name="android.permission.BATTERY_STATS"/>
 <uses-permission android:name="android.permission.READ_PHONE_STATE"/>
 <uses-permission android:name="android.permission.GET_TASKS"/>
 <uses-permission android:name="android.permission.READ_LOGS"/>
 ```

8. Save, build and run.

## Usage 

### Setting Screen Name

TestFairy can capture screenshots during a recorded session. It attempts to autmatically name a screenshot based on different measures. In order to override this you can invoke `setScreenName`, and set your own name for a captured screen. `setScreenName` expects a String, so developers are free to label screenshots with any label appropriate. Some developers make use of the level name to set the screenshot. For example

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

TestFairy allows the developer to correlate sessions to app specific information such as users, server-sessions or events.   
This is useful in cases where sessions are anonymous and or when sessions are related to server activities that are critical to understanding test behaviour.

Furthermore, TestFairy allows identifying the user with traits such as name, email or phone number. These will later be available for the developer to search upon, or review when looking at a specific session recording.

In order to set session level attributes associated with your user, please see the document on [Session Attributes](https://docs.testfairy.com/Android/Session_Attributes.html).

Identifying a session meaning setting a unique identifier for your user.

```
TestFairy.setUserId("<userId>");
```

Where `userId` is a string representing an association to your backend. We recommend passing values such as email, phone number, or user id that your app may use. This value may not be nil, and is searchable via API and web search.

### Exaple: identify user by email

```
TestFairy.setUserId("john@example.com");
```

### Session Attributes

TestFairy can collect additional information in your session that can help you generate better insights. 

```
TestFairy.setAttribute("<key>", "value");
```

The first value is a string `key` to help you search for the attribute in your session. The second paramter `value` is any string value for the attribute associated with the session. Neither value can be nil. These attributes are available later in the session recording page, is available via API, and is searchable.

#### Example

```
TestFairy.setAttribute("name","John Snow");
TestFairy.setAttribute("phone","+672-14-5109");
TestFairy.setAttribute("age","20");
TestFairy.setAttribute("favorite_color","blue");
```
