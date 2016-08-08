
## Configuration

Configuration file `config.json` is located in `.testfairyconnect` under running user's home directory. 

- On Windows: `C:\Users\MyUser\.testfairyconnect\config.json`

### Team Foundation Server (TFS)

#### Additional Requirements
* In order to connect to a working TFS server, machine running TestFairy Connect agent must have Visual Studio installed. For a free version of visual studio, please look at [Visual Studio Express](https://www.visualstudio.com/en-us/products/visual-studio-express-vs.aspx)

* The machine running TFC Agent must have [Microsoft Visual Studio Team Foundation Server 2015 Power Tools](https://visualstudiogallery.msdn.microsoft.com/898a828a-af00-42c6-bbb2-530dc7b8f2e1)
installed.

* In order to successfully integrate with TFS, user running TFC Agent must have write access to TFS project collection.
It might be a good idea to create a windows user called e.g. testfairyconnect, 
with permissions to both run the agent and create issues in TFS.

Example config.json:

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

Please note that `issueTracker.URL` setting should link to team project collection that the projects belong to.

