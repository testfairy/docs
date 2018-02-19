The EU General Data Protection Regulation (GDPR) was designed to harmonize data privacy laws across Europe, to protect and empower all EU citizens data privacy and to reshape the way organizations across the region approach data privacy. 

Following the new regulations, we have added new capabilities that help our customers keep their users' privacy.

### Users can see their sessions

On a Private cloud, it is possible for end users to see their recorded sessions. This requires the developer to identify the sessions, by using the SDK function [setUserId](https://docs.testfairy.com/SDK/Identifying_Your_Users.html).
Users will only be able see their sessions by logging into TestFairy via their desktop browser. At the moment mobile view is not supportd.

### Users can request to delete their sessions

On a Private cloud, it is possible for end users to request to the delete their sessions. Deletion request is done by clicking on the delete button at the top right corner of every session.
The deletion request will be sent to the account owner, who will confirm the deletion.

![ alt create-bug](../../img/app/delete-btn.png)

### Users will see a notifiction explaining what is going to be recorded

At the moment, this is in the developers' hands. Developers can choose if they want to explain what TestFairy records in their TOS or show a disclaimer when the app starts. In the case of a disclaimer, this should be done before calling TestFairy.begin.
