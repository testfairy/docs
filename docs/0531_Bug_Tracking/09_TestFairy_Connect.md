# TestFairy Connect (Docker)

#### Installation

Let's configure TestFairy Connect. This is needed only once. Docker will automatically download the latest version.

```sh
docker run -i -t -v $PWD:/etc/testfairy-connect testfairy/testfairy-connect:latest configure
```

Note: you can replace `$PWD` with a directory of your choice to store your TestFairy Connect configuration.

If there are no issues, you can now follow the interactive wizard that is displayed on screen. Documentation for this process is available at https://docs.testfairy.com/Bug_Tracking/TestFairy_Connect.html

#### Running

Now that you have TestFairy Connect configured, run it with:

```sh
docker run -d -v $PWD:/etc/testfairy-connect --restart=always testfairy/testfairy-connect:latest start
```

Note: you can replace `$PWD` with a directory of your choice to store your TestFairy Connect configuration.

TestFairy Connect will be running in the background, and it is safe to close the ssh connection. Please remember that stopping docker or rebooting the server, will require you to run the 'start' command again.

#### Troubleshooting

- SELinux: If you are having permission errors related to your docker volume, you can either try attaching volume in relaxed SELinux mode or disable SELinux enforcement entirely.
  - Use these commands to attach volume in relaxed SELinux mode:
  ```sh
  docker run -i -t -v $PWD:/etc/testfairy-connect:z testfairy/testfairy-connect:latest configure
  docker run -d -v $PWD:/etc/testfairy-connect:z --restart=always testfairy/testfairy-connect:latest start
  ```
  
  - Alternatively, you can disable SELinux altogether by running:
  ```sh
  sudo setenforce 0
  ```
  


