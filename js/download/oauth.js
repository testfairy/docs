var
	fs = require('fs'),
// Generate key using for example:
// openssl genrsa -out ~/.ssh/jira_rsa 2048
// openssl rsa -in ~/.ssh/jira_rsa -pubout > ~/.ssh/jira_rsa.pub
	privateKeyData,
	consumerKey = 'testfairy-connect', // just create any string
	OAuth = require('oauth').OAuth,
	readline = require('readline'),
	host = "http://localhost:2990/jira";

var consumer;

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Your JIRA URL: ', (input_host) => {
	var input_host = input_host.trim();

	host = input_host || host;
	console.log("Using host: " + host);


	rl.question('Path to your private key: ', (input_private_key_path) => {
		var input_private_key_path = input_private_key_path.trim();

		privateKeyData = fs.readFileSync(input_private_key_path, "utf8");
		console.log("Using private key from: " + input_private_key_path);

		consumer =
			new OAuth(
				host + "/plugins/servlet/oauth/request-token",
				host + "/plugins/servlet/oauth/access-token",
				consumerKey,
				privateKeyData,
				"1.0",
				"http://localhost:9999/",  // Should be a either a non existing url or a you domain, you will be redirect here with the oauth_verifier
				"RSA-SHA1",
				null,
				{
					"Accept": "application/json",
					"Connection": "close",
					"User-Agent": "Node authentication",
					"Content-Type": "application/json" // This part doesn't worked for me, when doing a request for resource, but for the auth process it doesn't matter
					// if you want to use consumter.get with an atlassian resource only solution I found till now is to comment following line in oauth/lib/oauth.js (arond 363)
					// headers["Content-Type"]= post_content_type;
				}
			);

		consumer.getOAuthRequestToken(
			function (error, oauthToken, oauthTokenSecret, results) {
				if (error) {
					console.log('Error: ', error);
				}
				else {
					console.log(results);
					console.log('oauthRequestToken: ' + oauthToken);
					console.log('oauthRequestTokenSecret: ' + oauthTokenSecret);
					console.log('Open this url in browser and manually authorize: ' + host + '/plugins/servlet/oauth/authorize?oauth_token=' + oauthToken);
					rl.question('Paste oauth_verifier parameter from the redirected url (browser): ', (oauth_verifier) => {
						oauth_verifier = oauth_verifier.trim();
						consumer.getOAuthAccessToken(
							oauthToken,
							oauthTokenSecret,
							oauth_verifier,
							function (error, oauthAccessToken, oauthAccessTokenSecret, results) {
								if (error) {
									console.log('Error: ', error);
									rl.close();
								}
								else {
									console.log('Result: ', results);
									console.log('oauthAccessToken: ' + oauthAccessToken);
									console.log('oauthAccessTokenSecret: ' + oauthAccessTokenSecret);
									rl.close();
								}
							}
						);
					})
					;
				}
			}
		);

	})
	;


})
;





