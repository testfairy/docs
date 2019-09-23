# TestFairy Connect

## What is TestFairy Connect?

TestFairy Connect is a proxy server installed on-premise, designed to help companies connect their bug tracking systems running behind a firewall (JIRA Server), with the TestFairy cloud. 

Test Fairy Connect is installed using a Docker image.

## How does it work?

The key part of TestFairy Connect is the agent service that runs on a system, within your firewall, connecting to TestFairy's web app and to your bug tracking system.

![Overview](/img/testfairy-connect/0-overview.png)

## How to Install TestFairy Connect (video tutorial)

<iframe width="560" height="315" src="https://www.youtube.com/embed/SdEHd8jNsOM" frameborder="0" allowfullscreen></iframe>

## Installation

Let's configure TestFairy Connect. 

This is needed only once. Docker will automatically download the latest version.

```sh
docker run -i -t -v $PWD:/etc/testfairy-connect testfairy/testfairy-connect:latest configure
```

Note: you can replace `$PWD` with a directory of your choice to store your TestFairy Connect configuration.

If there are no issues, you can now follow the interactive configuration wizard that is displayed on the screen. 

## Configuration

To configure TestFairy Connect you will need the following data:

* TestFairy API key (found at [https://[your-subdomain].testfairy.com/settings/api-key/](https://[your-subdomain].testfairy.com/settings/api-key/)
* The URL to your bug system.
* In the case of a JIRA basic authentication - valid credentials (UserName/API Token) for the JIRA user.
* In the case of a JIRA oauth authentication - admin access to JIRA/the ability to manage Application Links (as described in the configuration wizard script).

By default, your configuration file `config.json` is saved to `.testfairy-connect` under the Dockers Image home directory: `~/.testfairy-connect/config.json`

## Running

Now that you have TestFairy Connect configured, run it with:

```sh
docker run -d -v $PWD:/etc/testfairy-connect --restart=always testfairy/testfairy-connect:latest start
```

Note: you can replace `$PWD` with a directory of your choice to store your TestFairy Connect configuration.

TestFairy Connect will be running in the background, and it is safe to close the ssh connection. Please remember that stopping docker or rebooting the server, will require you to run the 'start' command again.

## Troubleshooting

#### SELinux
If you are having permission errors related to your docker volume, you can either try attaching volume in relaxed SELinux mode or disable SELinux enforcement entirely.
  
  - Use these commands to attach volume in relaxed SELinux mode:
  

```sh
docker run -i -t -v $PWD:/etc/testfairy-connect:z testfairy/testfairy-connect:latest configure
docker run -d -v $PWD:/etc/testfairy-connect:z --restart=always testfairy/testfairy-connect:latest start
```
  
  - Alternatively, you can disable SELinux altogether by running:

```sh
sudo setenforce 0
```
