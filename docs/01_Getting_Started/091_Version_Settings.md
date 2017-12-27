<!-- # Build Settings -->


<!-- ![ alt build-settings-btn](../../img/app/build-settings-btn.png) -->
<img src="../../img/app/build-settings-btn.png" width="800"/>

In order to configure your build (version) settings, click on the **Settings** button on your build menu, right next to the app name and version.
Every build has its own settings, however, some of the definitions are shared by all builds of an app.

Following are the settings you can modify in **"Build Settings"**:

 * App information - name, version, file size
 
 * Recording status - When recording is disabled, no testing data will be collected.
 
 * Metrics:
   * CPU
   * Memory
   * Application logs
   * Network (Android only)
   * Phone signal (Android only)
   * Battery (Android only)
   * WIFI (Android only)

   
 * Feedback module - when enabled, testers can provide feedback simply by shaking their device and filling a form that pops up. 

 * Security and privacy 
    * Strict mode - when enabled, users must login for app download. 
    
 * Auto-Update - when enabled, all the previous installations of this app will be automatically upgraded to this version. The next time a user with an old version opens his app, he will get an 'updating' message and the app will be installed automatically. No email will be sent regarding this update.

 * Session settings:
   * Max duration - determines a maximum recording time. This feature does not influence app usage, users can still use the app for more than the max duration, however, no recording will be made after that point.
   * Record in background (Android only) - if enabled, logs and other metrcis (no screen) will be recorded while the app is in the background. Please note that this option might affect battery consumption.
   * Record data only on wifi - when checked,  data will be recorded and sent back to TestFairy only when wifi is available.
  
 * Video settings - Changing video settings can be useful if you wish to decrease network overload: 
    * Enable video recording 
    * Screenshot interval - increase the interval to decrease network overload.
    * Video quality - decrease the video quality to decrease network overload.
   
 * Email settings - define who will receive various email notifications and how often. You can specify a separate email address for each type of event. To send event notifications to multiple email addresses, separate the addresses with a comma.

    You can get notified about the following types of events:
 
     * Crashes 
     * Feedbacks 
     * Signups - when testers joined beta community in private mode.
     * Invitation replies. Invitations for testers will be sent from support@testfairy.com. By default, replies to these invitations will be sent to the address of the devloper who uploaded the app. This address can be modified here.

 * JIRA settings 
  
 * Symbolication - upload a **mapping.txt** file from your proguard output to enable symbolication (Symbolication allows the translation of addresses in crash reports to function names, method names, file names and line numbers).
 * Comments - your comments for this build will be also appear in email invitations for testers and in testers app.
 
    


<!-- ![ alt build-settings-screen](../../img/app/build-settings.png) -->


**What to read next:** [Account Settings](Account_Settings.html)

