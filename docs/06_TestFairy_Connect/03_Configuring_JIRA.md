
## Configuration

Configuration file `config.json` is located in `.testfairyconnect` under running user's home directory. 

- On linux/Mac: `~/.testfairyconnect/config.json`
- On Windows: `C:\Users\MyUser\.testfairyconnect\config.json`

You'll need the following data:

* TestFairy Connect URL (typically at [https://app.testfairy.com/connect/](https://app.testfairy.com/connect/)). 
Might contain your organization subdomain instead of 'app'.
* TestFairy API key (found at [https://app.testfairy.com/settings/](https://app.testfairy.com/settings/))
* URL to you bug system.
* Valid credentials for a bug system user.
* List of projects to expose via TestFairy Connect agent.

## Supported issue trackers specific stuff

### JIRA (using username/password)

Example ```config.json```:
   
```json
    {
        "testfairy": {
            "timeout": 5000,
            "apiKey": "[as found under Upload API Key @ https://app.testfairy.com/settings]",
            "URL": "https://app.testfairy.com/connect"
        },
        "issueTracker": {
            "type": "jira",
            "issueType": "Bug",
            "URL": "http://localhost:2990/jira",
            "username": "admin",
            "password": "admin",
            "strictSSL": false,
            "oauth": false,
            "projects": ["PROJECT1", "PROJECT2"],
            "fieldMapping": {
                "status": "status",
                "summary": "summary",
                "description": "description"
            }
        }
    }
```
Please note that `issueTracker.URL` setting  should have proper schema (https or http), port (if not default), and path to JIRA application included.
