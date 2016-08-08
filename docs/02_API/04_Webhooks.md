Webhooks allow simple integration between TestFairy and your backend. Using these webhooks, you can subscribe for specific events, and receive an HTTP POST request whenever such event occurs.

For example, you would like to receive a notification when a new build has been uploaded, and send it to the development team. Another example, you want to save the feedbacks received in your own database or backend.

To configure webhooks, simply open the Webhooks tab in your [User Preferences](https://app.testfairy.com/settings/) page. You can configure more than one webhook, and each webhook applies to selected projects and selected events.

TestFairy will automatically detect Slack endpoints, and will send proper payload. Please follow the instructions in the [Slack integration guide](/Integrations/Slack.html).

### Supported Events

| Events   | Description |
|----------|-------------|
| Upload   | Every time a build is uploaded by one of the team members |
| Download | Every time a tester downloads a build via invitation link |
| Crash    | Every time the app crashes |
| Feedback | Every time a tester fills in a feedback, either via in-app or web |

### Payload

The payload of the HTTP POST request is always a JSON. The ***event*** field specifies the type of event, and the rest of the fields are specific for that type. Please review the *sample payloads* section blow for more information about fields in each event.

### Sample payload for Upload Event

```json
{
    "event": "upload",
    "timestamp": "2015-07-01 13:37:54",
    "version": "1.0",
    "build": 1,
    "appName": "Demo App",
    "filesize": 563876,
    "iconUrl": "https://testfairy.s3.amazonaws.com/icons/4/68348e8d8265771d64636e2d57bb9a672f812e1a.png",
    "communityUrl": "https://tsfr.io/myapp"
}
```

### Sample payload for Download Event

```json
{
    "event": "download",
    "timestamp": "2015-07-01 13:37:54",
    "version": "1.0",
    "build": 1,
    "appName": "Demo App",
    "filesize": 563876,
    "buildUrl": "https://app.testfairy.com/projects/10-demoapp/builds/584120",
    "iconUrl": "https://testfairy.s3.amazonaws.com/icons/4/68348e8d8265771d64636e2d57bb9a672f812e1a.png",
    "testerEmail": "bob@corporation.com",
    "referer": "http://my.testfairy.com"
}
```

### Sample payload for Crash Event

```json
{
    "event": "crash",
    "timestamp": "2015-07-01 12:01:59",
    "version": "1.0",
    "build": 1,
    "appName": "Demo App",
    "filesize": 563876,
    "buildUrl": "https://app.testfairy.com/projects/10-demoapp/builds/584120",
    "iconUrl": "https://testfairy.s3.amazonaws.com/icons/4/68348e8d8265771d64636e2d57bb9a672f812e1a.png",
    "email": "felix@corporation.com",
    "deviceName": "Samsung Galaxy S2",
    "rawDeviceName": "samsung gt-i9100t",
    "crashMessage": "java.lang.NullPointerException",
    "ipAddress": "54.227.255.225"
}
```

### Sample payload for Feedback Event
```json
{
    "event": "feedback",
    "timestamp": "2015-07-01 17:21:00",
    "version": "1.0",
    "build": 1,
    "appName": "Demo App",
    "filesize": 563876,
    "buildUrl": "https://app.testfairy.com/projects/10-demoapp/builds/584120",
    "iconUrl": "https://testfairy.s3.amazonaws.com/icons/4/68348e8d8265771d64636e2d57bb9a672f812e1a.png",
    "email": "alice@corporation.com",
    "rawDeviceName": "samsung gt-i9100t",
    "ipAddress": "54.227.255.225",
    "text": "App doesn't render nicely in landscape"
}
```
