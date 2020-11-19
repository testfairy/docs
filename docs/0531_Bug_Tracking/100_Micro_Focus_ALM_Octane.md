### Connecting Micro Focus ALM Octane to TestFairy

1. Go to your [__Bug Settings__](https://app.testfairy.com/settings/bug-system/) page.

2. From the drop down menu select the __Micro Focus ALM Octane__ Option.
![](/img/bug-tracking/ALM-1.png)

3. Now, go to your __ALM Octane__ workspace and navigate to the __API ACCESS__ tab. 
You can use an existing api access  one will have to create a new Api Access key and password (secret).
![](/img/bug-tracking/ALM-2.png)

4. Copy the `API key(Client ID)` and `API password (Client secret)` from your ALM Octane workspace to the fields in the __Bug System Configuration__ screen.

5. Copy your workspace number (you can find it in the URL of the workspace after `?admin&p=`.
The link for the URL filed should be: `https://almoctane-eur.saas.microfocus.com/api/shared_spaces/[INSERT WORKSPACE NUMBER HERE]/`.

6. Press `Save` to save the configuration.
![](/img/bug-tracking/ALM-3.png)

7. Scroll down and press `Actviate` for the app you want to connect to a project.

8. In the next window select the target workspace for your issues in the __Project Key__ field. 

9. 
