TestFairy provides mechanism to encrypt the logs and the screenshots that are recorded from the mobile device.

This information is encrypted using a randomly generated 256-bit AES key. This AES key is random and is only used in a single session recording. The AES key is then protected with an RSA key, where the public key is provided when constructing the SDK.

#### Generating public/private key pair

Generating a pair is done using openssl tool:

```
openssl genrsa -out private.pem 2048
```

This will create a file called `private.pem` with the private key. Now we will get the public key from this private key:

```
openssl rsa -in private.pem -outform PEM -pubout | base64 -
```

This command will output the base64 representation of the public key. Paste this value into the first parameter of `TestFairy.setPublicKey` method.

#### iOS

Enable end-to-end encryption for your iOS apps by calling `setPublicKey` before calling the `begin` method.

```
[TestFairy setPublicKey:@"<BASE64 OF PUBLIC KEY>"]; 
[TestFairy begin:@"<APP TOKEN>"];
```

#### Viewing sessions

Since the data is encrypted using RSA, viewing a session requires the private key. Simply visiting a recorded session will prompt a dialog for entry of the RSA Private Key. Just paste the private key text and click "OK". Your private keys are never sent to the server and are only kept within the browser session. 

Important note: it's cruical that you keep the private key safe. If lost, these sessions cannot be recovered and the recorded that will become useless.
