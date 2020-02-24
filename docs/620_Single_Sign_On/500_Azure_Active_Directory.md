
Single Sign-on enables you to manage users and testers outside of TestFairy. A list of permitted users and testers, as well as their passwords, is stored in Azure Active Directory. Therefore onboarding a new developer into the team is an easy task.

When SSO is configured into your account, the login page is replaced with a simple `login with sso` button.

Talk to us! Request a demo at [https://testfairy.com/products/solutions/enterprise#request-a-demo](https://testfairy.com/products/solutions/enterprise#request-a-demo)

### Setting up Azure Active Directory in your account

#### Adding an enterprise app

In your Home screen press the **Azure Active Directory** icon to open the **Directory overview**.

  ![](/img/sso/azure/azure-ad-1.png)
  
From the menu options select the **`Enterprise Application`** option.

  ![](/img/sso/azure/azure-ad-2.png)
  
Press the **`+Add application`** button.

  ![](/img/sso/azure/azure-ad-3.png)

Select the Non-gallery application, add an app name (TestFairy) and press the **`Add`** button.

  ![](/img/sso/azure/azure-ad-4.png)

Go back to the menu and select the Single sign-on menu option.

  ![](/img/sso/azure/azure-ad-5.png)

select the **`SAML`** option.

  ![](/img/sso/azure/azure-ad-6.png)


  ![](/img/sso/azure/azure-ad-17.png)  


  ![](/img/sso/azure/azure-ad-8.png)


  ![](/img/sso/azure/azure-ad-9.png)


  ![](/img/sso/azure/azure-ad-10-.png)


  ![](/img/sso/azure/azure-ad-11.png)


- Now, please go to your TestFairy account, click on "Account Preferences" in the topright menu, select `SAML/Single Sign-on` from the left menu, and paste the contents of the file you saved previosuly here. Click on `Update SAML metadata` when done.
  ![](https://docs.testfairy.com/img/sso/azure/azure-6.png)
  
- After configuration has been saved, you will see a success message.
  ![](https://docs.testfairy.com/img/sso/azure/azure-7.png)
  
Now, please log out and make sure you can see the `Login with Azure` button.


