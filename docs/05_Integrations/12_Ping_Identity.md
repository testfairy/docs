Single Sign-on allows managing users and testers outside of TestFairy. List of permitted users and testers and their passwords are all stored in Onelogin, so onboarding a new developer in the team is an easy task.

When SSO is configured in your account, the login page is replaced with a simple `login with sso` button.

Talk to us! Request a demo at https://testfairy.com/products/solutions/enterprise#request-a-demo

#### Setting up Ping Identity in your account

- Login to Ping Identity's admin dashboard, click on the 'Add Application' and select 'Search Application Catalog'
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-1.png)
 
- Type in "testfairy" in the search box, and select the application. Click on expand arrow.
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-2.png)
 
- Click 'Setup', no need to change configuration
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-3.png)
    
- Click on "Continue to Next Step"
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-4.png)
  
- Type in ACS URL and Entity ID. For *ACS URL*, please use `https://acme.testfairy.com/login/sso`, replace 'acme' with your own subdomain. For *Entity ID*, please use `https://acme.testfairy.com`. Again, please replace 'acme' with your own subdomain.
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-5.png)

- Click on "Continue to Next Step", no other configuration needs be changed.
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-6.png)
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-7.png)
  
- Click on "Save & Publish", and then click on "Finish"
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-8.png)
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-9.png)

- Once done, download "SAML Metadata".
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-10.png)
  
- Now login to TestFairy, and select Preferences.
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-11.png)
  
- Copy and contents of the file you just downloaded, and paste it into the textbox. Click on "Update"
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-12.png)
  
- TestFairy-side configuration is also done
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-13.png)

Now please logout, and you should see the "Login with SSO" 
