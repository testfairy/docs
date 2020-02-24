
Single Sign-on enables you to manage users and testers outside of TestFairy. A list of permitted users and testers, as well as their passwords, is stored in Azure Active Directory. Therefore onboarding a new developer into the team is an easy task.

When SSO is configured into your account, the login page is replaced with a simple `login with sso` button.

Talk to us! Request a demo at [https://testfairy.com/products/solutions/enterprise#request-a-demo](https://testfairy.com/products/solutions/enterprise#request-a-demo)

### Setting up Azure Active Directory in your account

#### Adding an enterprise app

- In your Home screen press the **Azure Active Directory** icon to open the **Directory overview**.

  ![](/img/sso/azure/azure-ad-1.png)
  
- From the menu options select the **`Enterprise Application`** option.

  ![](/img/sso/azure/azure-ad-2.png)
  
- Press the **`+Add application`** button.

  ![](/img/sso/azure/azure-ad-3.png)

- Select the **Non-gallery application**, add an app name (TestFairy) and press the **`Add`** button.

  ![](/img/sso/azure/azure-ad-4.png)

- Go back to the menu and select the Single sign-on menu option.

  ![](/img/sso/azure/azure-ad-5.png)

- Select the **`SAML`** option.

  ![](/img/sso/azure/azure-ad-6.png)

- Press the pencil icon to edit the __`Basic SAML Configuration`__ `Identifier (Entity ID)` and `Reply URL` fields.
  Add https://acme.testfairy.com/ to the `Identifier` field and https://acme.testfairy.com/login/sso 
 to the `Reply URL`.
 
 Change `acme` to your own __TestFairy__ subdomain. 
 
 Now download the XML file in the `Federation Data`. You will need it later for uploading to your [TestFairy Dashboard Security settings](https://app.testfairy.com/settings/security/).

  ![](/img/sso/azure/azure-ad-17.png)  

Now add an Azure AD user to your application.
Go to `**Users and Groups**` and press the `+Add User` button.

  ![](/img/sso/azure/azure-ad-8.png)

In the **`Add assigment`** column press the `Users and groups` line and select the user/users you want to add from the **`Users and groups`** column.

Once all users are added to the **`Selected items`** press the `Select` Button to finish the action.

  ![](/img/sso/azure/azure-ad-9.png)

The usewrs will now appear in the list.

  ![](/img/sso/azure/azure-ad-10-.png)


  ![](/img/sso/azure/azure-ad-11.png)


- Now, please go to your TestFairy account, click on "Account Preferences" in the topright menu, select `SAML/Single Sign-on` from the left menu, and paste the contents of the file you saved previosuly here. Click on `Update SAML metadata` when done.
  ![](https://docs.testfairy.com/img/sso/azure/azure-6.png)
  
- After configuration has been saved, you will see a success message.
  ![](https://docs.testfairy.com/img/sso/azure/azure-7.png)
  
Now, please log out and make sure you can see the `Login with Azure` button.


