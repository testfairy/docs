
Single Sign-on enables you to manage users and testers outside of TestFairy. A list of permitted users and testers, as well as their passwords, is stored in OKTA. Therefore onboarding a new developer into the team is an easy task.

Talk to us! Visit here to [Request a Demo](https://www.testfairy.com/contact_us.php).

#### Setting up OKTA in your account

- Login to OKTA, click on 'Admin' and pick 'Add Applications' from the right sidebar:
  ![](https://docs.testfairy.com/img/sso/okta/okta-1.png)
  
- Type "TestFairy" into the search form:
  ![](https://docs.testfairy.com/img/sso/okta/okta-2.png)
  
- And click "Add" on the TestFairy app:
  ![](https://docs.testfairy.com/img/sso/okta/okta-3.png)
  
- Now type in the name of the team in TestFairy (it is also the name of the subdomain):
  ![](https://docs.testfairy.com/img/sso/okta/okta-4.png)
  
- Next, select authorized users. When done, click "Next":
  ![](https://docs.testfairy.com/img/sso/okta/okta-5.png)
  
- OKTA-side configuration is done. Now click "Next":
  ![](https://docs.testfairy.com/img/sso/okta/okta-6.png)
  
- In the "Sign On" menu, click on "View Setup Instructions":
  ![](https://docs.testfairy.com/img/sso/okta/okta-7.png)
  
- Copy "ID Provided Metadata" from section 4 into your clipboard:
  ![](https://docs.testfairy.com/img/sso/okta/okta-8.png)
  
- Now login to https://app.testfairy.com, and open the "Preferences" page:
  ![](https://docs.testfairy.com/img/sso/okta/okta-9.png)
  
- In the 'Security' manu item "SAML/Single Sign-on" section, paste the copied 'ID Provided Metadata' into the text area:
  ![](/img/sso/okta/security-saml-okta-xml.png)
  
- TestFairy-side configuration is also done:
  ![](https://docs.testfairy.com/img/sso/okta/okta-11.png)

Now, please logout and if SSO is configured into your account, the login page is replaced with a simple `login with sso` button.

![login screenshot](https://docs.testfairy.com/img/sso/sso-login-screenshot.png)


#### [Optional:] Automatically importing groups from OKTA

When managing large teams with OKTA, it is most likely that people are already associated with groups. 

For example, say Alice is associated with the following groups in OKTA: ["QA", "QA San Francisco"]. With auto-import of groups, she will be automatically be associated with the following groups in TestFairy next time she signs in: "okta", "okta-qa", and "okta-qa-san-francisco". If she was removed from group "QA", she will be automatically be removed from "okta-qa" group in TestFairy, the next time she signs in.

To import groups each time a user signs into TestFairy, please follow these instructions. 

- Open the TestFairy app in your OKTA account, select `General` tab, and click `Edit`. In `SAML Settings` section, under `Group Attribute Statements`, add a rule with name: "groups", (LOWERCASE!!!) and filter "Matches regex" with value `.*`. (dot asterisk) See screenshot: 
  ![](/img/sso/okta/okta-groups-2.png)
  
- When done, please click on `Update Now` so OKTA updates caches. See screenshot:
  ![](/img/sso/okta/okta-groups-1.png)

That's it!
Need our assistance? Don't hesitate to [contact support](https://www.testfairy.com/contact_us.php).
