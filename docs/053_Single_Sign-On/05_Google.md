
Single Sign-on enables you to manage users and testers outside of TestFairy. A list of permitted users and testers, as well as their passwords, is stored in Google Apps. Therefore onboarding a new developer into the team is an easy task.

When SSO is configured into your account, the login page is replaced with a simple `Login with Google` button.

Talk to us! Request a demo at [https://testfairy.com/products/solutions/enterprise#request-a-demo](https://testfairy.com/products/solutions/enterprise#request-a-demo)

#### Setting up Login With Google in your account

- Login to Google Apps as admin, go to the admin console and select `Apps`, click on `SAML apps`, and click on bottom-right "Add" button.
  ![](https://docs.testfairy.com/img/sso/google/google-1.png)
  ![](https://docs.testfairy.com/img/sso/google/google-2.png)
  ![](https://docs.testfairy.com/img/sso/google/google-3.png)
  
- In the popup window, select `Setup my own custom app` at the bottom.
  ![](https://docs.testfairy.com/img/sso/google/google-4.png)
  
- In step 2, please click on "Option 2: IDP metadata" to download an xml file, and click next
  ![](https://docs.testfairy.com/img/sso/google/google-5.png)
  
- In step 3, enter "TestFairy" as the name of the application, and click next
  ![](https://docs.testfairy.com/img/sso/google/google-6.png)
  
- In step 4, we will add the service provider details. Please change `acme` to your enterprise subdomain name on TestFairy.com in the ACS URL: `https://acme.testfairy.com/login/sso`
  Entity ID: `https://acme.testfairy.com`
  ![](https://docs.testfairy.com/img/sso/google/google-7.png)
  
- Please review and click `Finish` when done.
  ![](https://docs.testfairy.com/img/sso/google/google-8.png)
  
- Now, please go to your TestFairy account, click on "Account Preferences" in the topright menu, select `SAML/Single Sign-on` from the left menu, and paste the contents of the file you saved previosuly here. Click on `Update SAML metadata` when done.
  ![](https://docs.testfairy.com/img/sso/google/google-9.png)
    
Now, please log out and make sure you can see the "Login with Google" button.
