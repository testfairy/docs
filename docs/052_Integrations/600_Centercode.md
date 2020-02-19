# How to connect TestFairy to Centercode

### 1. Create a Centercode API Key

Open the Centercode Community Homepage, and go to Community Tools > Configuration > API Keys (under Advanced Configuration)   > Create an API Key. Name the new API KEY "TestFairy".
  
  ![Create API KEY](/img/bug-tracking/centercode1.png)

### 2. Name the new API KEY "TestFairy" and generate the new API Key.

  ![Set Generate Key](/img/bug-tracking/centercode2.png)

### 3. Configure a Centercode externnal feedback source:

  ![Centercode extenrnal feedback source](/img/bug-tracking/centercode3a.png)
  
  3.1 Click Project Tools
  
  3.2 Click Feedback Types
  
  3.3 Hover over your desired Feedback Type (Bug Reports) & click Modify
  
  3.4 Click External Sources
  
  3.5 Click "Create an External Source" 
  
  3.6 From the External Sources creation page Create an (internally-facing) Name
  
  3.7 Provide a simple Key to help identify this External Source  (ex: “appcrashlog” - detailed below)
  
  3.8 Select the appropriate Workflow state (typically “New”)
  
  3.9 Configure your Incoming Fields
  
  3.10 Copy / Save your API Endpoint URL and click Submit

### 4. Configure a new Cetercode in your TestFairy settings: 

  4.1. Open your TestFairy account **Preferences** --> **Integrations** menu.

  ![Create webhook](/img/integrations/centercode/centercode-int-1.png)

  4.2 Name the integration `Centercode`, enter the Centercode endpoint URL, check the `User feedback` checkbox and submit.

  ![Create webhook](/img/integrations/centercode/centercode-int-2.png)

