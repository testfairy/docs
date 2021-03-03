### Connecting Micro Focus ALM Octane to TestFairy

1. Go to your [__Integrations__](https://app.testfairy.com/settings/integrations/) page.


2. Scoll the list to the __Micro Focus ALM Octane__ line and press the `Add Integration` button.
![](/img/bug-tracking/ALM-1.png)


3. Now, go to your __ALM Octane__ workspace and navigate to the __API ACCESS__ tab. 
You can use an existing Api Access if you have its `API key(Client ID)` and `API password (Client secret)` or create a new one.
![](/img/bug-tracking/ALM-2.png)


4. Copy the `API key(Client ID)` and `API password (Client secret)` from your workspace to the fields in the __Bug System Configuration__ screen.
![](/img/bug-tracking/ALM-2_1.png)

5. Copy your workspace number (you can find it in the URL of the workspace after `?admin&p=`.
The link in the URL field should be: `https://almoctane-eur.saas.microfocus.com/api/shared_spaces/[INSERT WORKSPACE NUMBER HERE]/`.


6. Press `Save` to save the configuration.
![](/img/bug-tracking/ALM-3.png)


7. Scroll down and press `Actviate` for the app you want to connect to a workspace.


8. In the window select the target workspace for your issues in the __Project Key__ field and `Save Changes`.
![](/img/bug-tracking/ALM-4.png)


9. When you returne to the apps screen the workspace is mapped to the app.
![](/img/bug-tracking/ALM-5.png) 
