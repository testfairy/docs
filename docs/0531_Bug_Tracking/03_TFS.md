## TestFairy Connect
In order to connect TestFairy to TFS, start by [installing TestFairy Connect](/Bug_Tracking/TestFairy_Connect.html)

## Configuration

The configuration file `config.json` is located in `.testfairyconnect` under the running user's home directory. 

- On Windows: `C:\Users\MyUser\.testfairyconnect\config.json`

### Team Foundation Server (TFS)

#### Additional Requirements
* In order to connect to a working TFS server, the machine running TestFairy Connect agent must have Visual Studio installed. For a free version of Visual Studio, please look at [Visual Studio Express](https://www.visualstudio.com/en-us/products/visual-studio-express-vs.aspx)

* The machine running TFC Agent must have [Microsoft Visual Studio Team Foundation Server 2015 Power Tools](https://visualstudiogallery.msdn.microsoft.com/898a828a-af00-42c6-bbb2-530dc7b8f2e1) installed.

* In order to successfully integrate with TFS, the user running TFC Agent must have write access to the TFS project collection.
It might be a good idea to create a Windows user with permissions to both run the agent and create issues in TFS, and name it accordingly, for instance"testfairyconnect".


An example config.json:

```json
    {
        "testfairy": {
            "timeout": 5000,
            "apiKey": "[as found under Upload API Key @ https://app.testfairy.com/settings]",
            "URL": "https://app.testfairy.com/connect"
        },
        "issueTracker": {
            "type": "tfs",
            "URL": "http://localhost:8080/tfs/DefaultCollection",
            "projects": ["Project1", "Project2"],
            "fieldMapping": {
                "status": "State",
                "summary": "Title",
                "description": "Repro Steps"
            }
        }
    }
```

Please note that the `issueTracker.URL` setting should link to the relevant team project collection.


