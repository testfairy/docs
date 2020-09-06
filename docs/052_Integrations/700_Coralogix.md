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
testfairy-fetch-sessions --endpoint "your_subdomain.testfairy.com" --user "john@example.com" --api-key "YOUR_API_KEY" --project-id=1000 --logs --json
```

Please make sure to replace the following params:

* Replace **your_subdomain.testfairy.com** with your server address

* Replace **john@example.com** with your admin username

* Replance **YOUR_API_KEY** with your API KEY (found under User preferences --> Upload API key)

* Replace **1000** with your project ID

* Optional: add **--json** to have log line as a json with all session attributes.

* Optional: add **--all-time** flag to get logs from all time. If not used, tool will fetch logs from the last 24 hours only. Do not use this option unless this is the first time you are debugging the service. Logs older than 24 hours are usually a pure waste of good disk space.

* Optional: if your logs are encrypted with RSA public key, then please use --rsa-private-key with your private key for decryption.


## 3. Install Coralogix shipper

1. Download the preconfigured [fluentd.conf](/img/coralogix/fluentd.conf)
2. Edit `fluentd.conf`, and update `CORALOGIX_PRIVATEKEY` and `CORALOGIX_APPNAME`

## 4. Run FluentD

Type this command in your terminal:
```
docker run -d -v `pwd`/fluentd.conf:/fluentd/etc/fluent.conf -v `pwd`:/opt coralogixrepo/fluentd-coralogix-image:latest
```

Fluentd will loop endlessly, looking for new logs files on disk. Make sure you keep this docker container running, while the cron job fetches sessions from TestFairy every now and then.

Congratulations!
You have integrated TestFairy with Coralogix, you can now analyze and monitor mobile app logs in production. 


