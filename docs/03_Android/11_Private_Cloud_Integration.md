The TestFairy enterprise suite can be installed on a private cloud on any AWS location in the US, Europe, Asia or South America. Servers can be protected by custom firewall settings, allowing access only from your offices, according to your security policy.

# Set your endpoint

Once you've got your private cloud set up, make sure to get the URL endpoint towards which your apps will direct all of their data. This URL must be passed into the SDK before the `begin` method is called. See [this](https://docs.testfairy.com/Android/Integrating_Android_SDK.html) document for more information on calling `begin`. Following is an example of setting the correct endpoint URL:

```
TestFairy.setServerEndpoint("<your private cloud url here>");
TestFairy.begin(context, "<your app token here>");
```

Please Note: It's important that you include a trailing slash `/` in your URL. Following is a concrete example of this:

```
TestFairy.setServerEndpoint("https://my-subdomain.testfairy.com/services/");
TestFairy.begin(context, "<your app token here>");
```

### Related Articles

* [Private cloud integration in iOS](https://docs.testfairy.com/iOS_SDK/Private_Cloud_Integration.html)

