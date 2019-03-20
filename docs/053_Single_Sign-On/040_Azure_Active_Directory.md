
Single Sign-on enables you to manage users and testers outside of TestFairy. A list of permitted users and testers, as well as their passwords, is stored in Azure Active Directory. Therefore onboarding a new developer into the team is an easy task.

When SSO is configured into your account, the login page is replaced with a simple `login with sso` button.

Talk to us! Request a demo at [https://testfairy.com/products/solutions/enterprise#request-a-demo](https://testfairy.com/products/solutions/enterprise#request-a-demo)

#### Setting up Azure Active Directory in your account

- Login to Microsoft Azure as global admin, select `Azure Active Directory`, click on `App Registrations`, and click on `New application registration`
  ![](https://docs.testfairy.com/img/sso/azure/azure-1.png)
  
- In the new tab, type in these fields: 
  Name: `TestFairy`
  Type: `Web App / API`
  Sign-on: `https://acme.testfairy.com` (replace `acme` with your own subdomain)
  ![](https://docs.testfairy.com/img/sso/azure/azure-2.png)
  
- Now click on `Endpoints`, and select the newly created `TestFairy` app
  ![](https://docs.testfairy.com/img/sso/azure/azure-3.png)
  
- Open "FEDERATION METADATA DOCUMENT" URL and save the file to disk
  ![](https://docs.testfairy.com/img/sso/azure/azure-4.png)
  
- Open `Settings` and select `Properties`. Update the following items. Change `acme` with your own subdomain.
  App ID URI: `https://acme.testfairy.com`
  Home page URL: `https://acme.testfairy.com/login/sso`
  ![](https://docs.testfairy.com/img/sso/azure/azure-5.png)
  
- Now, please go to your TestFairy account, click on "Account Preferences" in the topright menu, select `SAML/Single Sign-on` from the left menu, and paste the contents of the file you saved previosuly here. Click on `Update SAML metadata` when done.
  ![](https://docs.testfairy.com/img/sso/azure/azure-6.png)
  
- After configuration has been saved, you will see a success message.
  ![](https://docs.testfairy.com/img/sso/azure/azure-7.png)
  
Now, please log out and make sure you can see the "Login with Azure" button.
