
Single Sign-on allows managing users and testers outside of TestFairy. List of permitted users and testers and their passwords are all stored in OKTA, so onboarding a new developer in the team is an easy task.

When SSO is configured in your account, the login page is replaced with a simple `login with sso` button.

![login screenshot](https://docs.testfairy.com/img/sso/sso-login-screenshot.png)

Talk to us! Request a demo at https://testfairy.com/products/solutions/enterprise#request-a-demo

#### Setting up OKTA in your account

- Login to OKTA, click on 'Admin' and pick 'Add Applications' from the right sidebar.
  ![](https://docs.testfairy.com/img/sso/okta/okta-1.png)
  
- Type "testfairy" into the search form
  ![](https://docs.testfairy.com/img/sso/okta/okta-2.png)
  
- And click "Add" on the TestFairy app
  ![](https://docs.testfairy.com/img/sso/okta/okta-3.png)
  
- Now type in the name of the team in TestFairy (it is also the name of the subdomain)
  ![](https://docs.testfairy.com/img/sso/okta/okta-4.png)
  
- Next, select authorized users. When done, click "Next"
  ![](https://docs.testfairy.com/img/sso/okta/okta-5.png)
  
- OKTA-side configuration is done. Now click "Next"
  ![](https://docs.testfairy.com/img/sso/okta/okta-6.png)
  
- In "Sign On" menu, click on "View Setup Instructions"
  ![](https://docs.testfairy.com/img/sso/okta/okta-7.png)
  
- Copy "ID Provided Metadata" from section 4 into your clipboard
  ![](https://docs.testfairy.com/img/sso/okta/okta-8.png)
  
- Now login to https://app.testfairy.com, and open "Preferences" page
  ![](https://docs.testfairy.com/img/sso/okta/okta-9.png)
  
- In "SAML/Single Sign-on" menu, paste your clipboard into the text area
  ![](https://docs.testfairy.com/img/sso/okta/okta-10.png)
  
- TestFairy-side configuration is also done
  ![](https://docs.testfairy.com/img/sso/okta/okta-11.png)

Now please logout, and you should see the "Login with SSO" 
