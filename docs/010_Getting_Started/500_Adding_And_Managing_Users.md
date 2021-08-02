**Adding and Managing Users**

Use the Team area to manage your team members:

![team menu](/img/app/team/team-menu.png)

There are 4 types of users in the system:
1. **Account Owner** - the owner of the account. This user cannot be changed and has full control on the account. The owner  can add Admins, make them Managers and add Testers.
2. **Account Manager** - an admin account that in addition to admin actions can add and delete other admin users(not managers). Managers can not add account manages and can not remove the account owner.
3. **Admin** - a developer that can upload builds, delete builds and view and delete sessions. 
4. **Beta Tester** - can download builds of apps. See [here](https://docs.testfairy.com/Getting_Started/How_To_Invite_Testers.html).

You can define an admin as a manager by selecting the account from the list and selecting the `Set as manager` action from the **more actions** menu under the list (you need to be an `owner` or `manager` to perform this action):

![make manager](/img/app/team/make-manager-1.png)


To add more admins to your account add their email address to the **Add new admins** field and specify the access level in the **Permissions** field. You can add more than one at a time by adding several emails to the list, one email in each line. 


![ alt add-admins](/img/app/add-admins.png)

- The default access level given to **admin** accounts is `All Projects (rw)` . **rw** mean full access - **read** and **write** to the project specified, or all projects. **r** means **read only** access.

     * **rw** and **r** Permissions are created automatically for each application that is loaded to the system.
     * In addition, there is the `All projects` permission which is for **all applications** that are loaded to the system.
     
- If you want a different set of permissions for a team member you can select them from the combinations in the permission windows by clicking on the desired set for each project. delete the permission by clicking the `x` on the permission.
