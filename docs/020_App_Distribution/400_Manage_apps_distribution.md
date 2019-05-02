### Disable the landing page

If you do not want a landing page you can disable it on the landing page settings page for that specific app:

![dissable landing page](/img/landing-pages-on-off.png)

Disabling the page will not stop the distribution of the app since it still appears in the **testers dashboard** and is still alive in the system.


If you want to **`stop`** distribution of your app you will need to do one of 2 actions:

### Disable distribution

In the build **Settings** go to **App Distribution**  and change it to `Disabled` and press save changes.

![](/img/app_distribution/dissable-dist-build.png)

You will see a message confirming the new settings have been changed:

![](/img/app_distribution/app-dist-save-sucsess.png)

And If you go to the build overview you will see another message that the build is expired and testers will not be able to install this build:

![](/img/app_distribution/build-invalid.png)

Once the build is disabled the app will not appear in the testers dashboard but Testers who already installed the app will be able to continue using it.

### Deleting the build from the dashboard

If you want to delete a build from the system go to the build settings page inside the App Overview menu:

![](/img/app_distribution/select-builds.png)

On the left column select the checkbox of the build you want to delete. You can choose one, many or all the builds.

Once you select the build, in the bottom actions drop down choose Delete (n) builds:

![](/img/app_distribution/delet-builds.png)

Confirm the deletion:

![](/img/app_distribution/confirm-delete.png)

A message confirming the duild was deleted will be displayed.
