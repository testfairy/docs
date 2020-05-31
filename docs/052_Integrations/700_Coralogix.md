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

