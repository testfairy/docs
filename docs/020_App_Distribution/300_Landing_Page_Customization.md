## How to customize your apps landing page?
Landing pages created for app distribution can be customized to have the look and feel of your company or brand.

The basic landing page that is automatically generated looks like this:


![landing page](/img/landing-page-customization-areas.png)


The following elements can be changed via the Add custom CSS option in the landing page settings:


 * **Page title** - class `.testfairy-app-name`
 
 * **Release notes** - class `.testfairy-description`
 
 * **Feedback Instructions** - class `.community-sub-title.dev`
 
 * **Background** - class `.testfairy-background`
 

Here is an example for a CSS code you can use in order to customize your landing page:

```

.testfairy-background {background-image: url("https://www.testfairy.com/images/castle-cloud.jpg") !important;}
.testfairy-app-name {color: green;}
.testfairy-description {color: red;}
.community-sub-title.dev {color: blue;}

```
 
 
![css editing](/img/landing-page-customization-css-place.png)
