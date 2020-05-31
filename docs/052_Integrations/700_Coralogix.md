[Coralogix](https://coralogix.com/) is a Log Analytics platform that helps companies get real time insights from their logs.

In order to integrate TestFairy with Coralogix, and automatically push all the logs collected from 
your mobile devices to the Coralogix platform, please do the following:

## 1. Install the TestFairy Logs Client on your server: 

Install the TestFairy logs client on your server by running the following command:
```
npm install -g --link git+https://github.com/testfairy/testfairy-fetch-sessions.git
```

## 2. Configure a chron job that will run the TestFairy client 

Chreate a chron job that will run the TestFairy Logs client every 15 minutes.

This is the comment you need to run:

```
testfairy-fetch-sessions --endpoint "your_subdomain.testfairy.com" --user "john@example.com" --api-key "YOUR_API_KEY" --project-id=1000 --logs --rsa-private-key ../my_private_keys/private.pem
```

Please make sure to replace the following params:

* Replace your_subdomain.testfairy.com with your server address

* Replace john@example.com with your admin username

* Replance YOUR_API_KEY with your API KEY

* Replace 1000 with your project ID

* Replace ../my_private_keys/private.pem with the path to your private key.

* Optional: add --all-time to get logs from all time. If not used, tool will fetch logs from the last 24 hours.


2. Install [FluentD v1.0+](https://docs.fluentd.org/installation)
3. Install the following fluentd plugins:
3.1. [fluent-plugin-coralogix](https://github.com/coralogix/fluentd-coralogix-image)
3.2. [fluent-plugin-detect-exceptions](https://github.com/GoogleCloudPlatform/fluent-plugin-detect-exceptions)
3.3. [fluent-plugin-concat](https://github.com/fluent-plugins-nursery/fluent-plugin-concat)
4. Download [fluentd.conf](/img/coralogix/fluentd.conf) fluentd.conf file, and change the following parameters:
4.1. <source> type tail --> path (point to the testfairy-sessions folder)


![coralogix](/img/coralogix/image.png)

![coralogix](/img/coralogix/image2.png)
