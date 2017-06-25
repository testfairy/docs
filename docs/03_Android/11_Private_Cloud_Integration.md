The TestFairy enterprise suite can be installed on a private cloud on any AWS location in the US, Europe, Asia or South America. Servers can be protected by custom firewall rules allowing access only from your offices, according to your security policy.

# Set your endpoint

Once you've got your private cloud setup, make sure to get the URL endpoint your apps will direct all of its data towards. This URL must be passed into the SDK before the `begin` method is called. See [this](https://docs.testfairy.com/Android/Integrating_Android_SDK.html) document for information on calling `begin`. An example of setting the correct endpoint URL is given below

```
TestFairy.setServerEndpoint("<your private cloud url here>");
TestFairy.begin(context, "<your app token here>");
```

Note: It's important that you include a trailing slash `/` in your URL. A concrete example of this is given below

```
TestFairy.setServerEndpoint("https://my-subdomain.testfairy.com/services/");
TestFairy.begin(context, "<your app token here>");
```
