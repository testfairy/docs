[Coralogix](https://coralogix.com/) is a machine-learning powered logging platform built for companies performing CI/CD at scale.

In order to integrate TestFairy with Coralogix, and automatically push all the logs collected from 
your mobile devices to your Coralogix account, please do the following:

## 1. Install the TestFairy Logs Client on your server: 

Install the [TestFairy fetch sessions](https://github.com/testfairy/testfairy-fetch-sessions) logs client on your server by running the following command:
```
npm install -g --link git+https://github.com/testfairy/testfairy-fetch-sessions.git
```

## 2. Configure a cron job that will run the TestFairy client 

Create a cron job that will run this command every 15 minutes.

```
testfairy-fetch-sessions --endpoint "your_subdomain.testfairy.com" --user "john@example.com" --api-key "YOUR_API_KEY" --project-id=1000 --logs --json --rsa-private-key ../my_private_keys/private.pem
```

Please make sure to replace the following params:

* Replace **your_subdomain.testfairy.com** with your server address

* Replace **john@example.com** with your admin username

* Replance **YOUR_API_KEY** with your API KEY (found under User preferences --> Upload API key)

* Replace **1000** with your project ID

* Optional: replace **../my_private_keys/private.pem** with the path to your private key if you have one.

* Optional: add **--json** to have log line as a json with all session attributes.

* Optional: add **--all-time** flag to get logs from all time. If not used, tool will fetch logs from the last 24 hours only. Do not use this option unless this is the first time you are debugging the service. Logs older than 24 hours are usually a pure waste of good disk space.


## 3. Install FluentD

3.1. Install [FluentD v1.0+](https://docs.fluentd.org/installation) for your environment.

3.2 Install the following fluentd plugins:
* Coralogix shipper plugin [fluent-plugin-coralogix](https://github.com/coralogix/fluentd-coralogix-image)
* Detect exceptions plugin [fluent-plugin-detect-exceptions](https://github.com/GoogleCloudPlatform/fluent-plugin-detect-exceptions)
* Concatenate lines plugin [fluent-plugin-concat](https://github.com/fluent-plugins-nursery/fluent-plugin-concat)

3.5. Download the preconfigured [fluentd.conf](/img/coralogix/fluentd.conf) and save it (note the file location).

3.6. Edit fluentd.conf and under &lt;source&gt; => *@type tail* update **path** to point to the testfairy sessions folder. You may also change the location of the _pos_file_ if you wish (which keeps track of the current pointer for each log file and prevents duplicates).
![coralogix](/img/coralogix/image.png)

3.7. Under &lt;label @CORALOGIX&gt; => &lt;match * *&gt; change **privatekey**, **appname** and **subsystemname**. Your Coralogix private_key can be found under Settings --> Send your logs.
![coralogix](/img/coralogix/image2.png)

## 4. Run FluentD

Run fluentd with terminal parameter **-c /etc/config/fluentd.conf** (change based on where you downloaded **fluentd.conf** in _3.5_) and enjoy the flow of TestFairy logs into your Coralogix account. FluentD will automatically ship new logs as they are dowbloaded by testfairy-fetch-sessions cron job.

