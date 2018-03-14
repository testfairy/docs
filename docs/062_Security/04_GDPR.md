The EU General Data Protection Regulation (GDPR) was designed to harmonize data privacy laws across Europe, to protect and empower all EU citizens data privacy and to reshape the way organizations across the region approach data privacy. 

Following the new regulations, we have added new capabilities that help our customers keep their users' privacy.

### TestFairy Users can see their sessions

On a Private cloud or on an on-prem installation, it is possible for companies to allow their end users to see their recorded sessions. This requires the developer to identify the sessions, by using the SDK function [setUserId](https://docs.testfairy.com/SDK/Identifying_Your_Users.html).
Users will only be able see their sessions by logging into TestFairy via their desktop browser. At the moment mobile view is not supportd.

### TestFairy Users can request to delete their sessions

On a Private cloud or on an on-prem installation, it is possible for companies to allow their end users to request to the delete their sessions. Deletion request is done by clicking on the delete button at the top right corner of every session.
The deletion request will be sent to the account owner, who will confirm the deletion.
It is important to mention that the deletion of data is done by the account owner and under his responsibility.

![ alt create-bug](../../img/app/delete-btn.png)

### TestFairy Users can see a notifiction explaining what is going to be recorded

TestFairy requires customers to notify users that they are recorded. This can be done in the app TOS that must be easily accesible and easy to read and understand, and also possible to display a visual dialong (pop up) when the app starts, explaining the user that they are recorded for quality assurance purposes and how they can request to delete their data.
In case of a showing a visual disclaimer, this should be done before calling the function TestFairy.begin.

### TestFairy data can be automatically deleted after 30 days (configurable)

It is bery important not to keep data for too long. TestFairy can automatically delete sessions older than 30 days or any other time perioud required by your company. Deletion is permanent and can not be undone.
