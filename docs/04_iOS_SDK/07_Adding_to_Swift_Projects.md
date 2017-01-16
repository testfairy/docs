
TestFairy runs in Swift projects as well. Follow these steps to add it to your project:      
      
1. **Create a bridging** between Swift and Objective-C. Since this process only needs to be done once per project, if you have already done so, just update your bridging header file.

    + Right-click on your project, select `New File...`
    + Select `Header File.h`
    + Save as `Bridging.h` in your project
    + Click on `Bridging.h` to open it in editor
    + Add the following line to the code: 
    
      ```
      #import "TestFairy.h"
      ```
 
 2. **Initialize** the TestFairy framework:

    + Open your `AppDelegate.swift` file
    
    + Locate `application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool` and add a call using the *App Token* from your [Account Settings page](https://app.testfairy.com/settings#apptoken)
      
      
      ```
      TestFairy.begin("APP_TOKEN")  
      ```

3. Update **Build Settings** with the new bridging header:

    + Click on your project
    + Select *Build Settings* tab
    + Edit *Swift Compiler - Code Generation*: *Objective-C Bridging Header*
    + Drag "Bridging.h" from the source tree onto the edit box opened

4. Add the following **frameworks**:

    + ```CoreMedia.framework```
    + ```CoreMotion.framework```
    + ```AVFoundation.framework```
    + ```OpenGLES.framework```
    + ```SystemConfiguration.framework```

