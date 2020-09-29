## TestFairy Fetch Sessions tool

Download link: [TestFairy Fetch Sessions](https://github.com/testfairy/testfairy-fetch-sessions/)

### About

This tool downloads screenshots and/or logs from recorded TestFairy sessions.
Use this to download data you want to analyze with your own toolchain or to import to your own analytics systems.

### Installation

`npm install -g --link git+https://github.com/testfairy/testfairy-fetch-sessions.git`

If you receive the error: "Could not create leading directories", then you should run the same command with `sudo -s` prefix.

### Usage

`testfairy-fetch-sessions --endpoint "acme.testfairy.com" --user "john@example.com" --api-key "0123456789abcdef" --project-id=1000 --logs --screenshots`

The example above would connect to endpoint `acme.testfairy.com` (which can be a private cloud installation, a public cloud installation, or an on-premise installation.) It will use the credentials of `user` and `api-key`.

Since both `--logs` and `--screenshots` are possible, the tool can download all **screenshots** and all **logs** from app's project 1000.

You can create an **MP4 video** using all the downloaded screenshots by passing `--video` along with `--screenshots`.

You can find the id of the project (app) you want to download by examining the url (for example: https://app.testfairy.com/projects/1000/).

TestFairy Fetch Sessions tool is incremental in downloads - this means that you can run the tool multiple times, and it will only download new sessions that were recorded.

For Support we're available at [support@testfairy.com](mailto:support@testfairy.com).

# Downloading Encrypted Logs

If you are encrypting your sessions, and want to download the logs from a given project, you must pass the path to a file containing the private key into the `--rsa-private-key` argument.

`testfairy-fetch-sessions --endpoint "acme.testfairy.com" --user "john@example.com" --api-key "0123456789abcdef" --project-id=1000 --logs --screenshots --rsa-private-key "/path/to/rsa-private.pem"`

### Parameters

| key             | description                                                        | default          |
|-----------------|--------------------------------------------------------------------|------------------|
| help            | Display usage                                                      |                  |
| version         | Display fetch-session version                                      |                  |
| project-id      | Project ID                                                         | * required       |
| user            | TestFairy Account Email                                            | *                |
| api-key         | API key from https://app.testfairy.com/settings/api-key            | *                |
| endpoint        | TestFairy endpoint (private servers only)                          | *                |
| rsa-private-key | Path to RSA private key (only required if sessions are encrypted)  |                  |
| logs            | Fetch logs from sessions of given project                          |                  |
|  screenshots    | Fetch screenshots from sessions of given project                   |                  |
| video           | Fetch screenshots                                                  |                  |
| all-time        | Fetch all sessions for a given project                             | Last 25 sessions |
| json            | Outputs logs as json result along with meta data information       | Only Logs        |
| overwrite       | Overwrites any downloaded                                          | false            |
