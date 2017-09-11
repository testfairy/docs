
Single Sign-on allows managing users and testers outside of TestFairy. List of permitted users and testers and their passwords are all stored in Onelogin, so onboarding a new developer in the team is an easy task.

When SSO is configured in your account, the login page is replaced with a simple `login with sso` button.

Talk to us! Request a demo at https://testfairy.com/products/solutions/enterprise#request-a-demo

#### Setting up Onelogin in your account

- Login to Onelogin, click on the 'NEW APP' button on the right.
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-1.png)
 
- Type in "testfairy" in the search box, and select the application.
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-2.png)
 
- Click 'Save', no need to change configuration
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-3.png)
  
- Type in your TestFairy subdomain (for example, acme), under 'Configuration' tab. Click "Save".
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-4.png)
  
- Click on "More Actions" and select "SAML Metadata", this will download a file to your computer.
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-5.png)
  
- Now login to TestFairy, and select Preferences.
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-6.png)
  
- Copy and contents of the file you just downloaded, and paste it into the textbox. Click on "Update"
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-7.png)
  
- TestFairy-side configuration is also done
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-8.png)

Now please logout, and you should see the "Login with SSO" 
