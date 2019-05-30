## How to customize your apps landing page?
Landing pages created for app distribution can be customized to have the look and feel of your company or brand.

The basic landing page that is automatically generated looks like this:


![landing page](/img/landing-page-customization-areas.png)


The following elements can be changed via the Add custom CSS option in the landing page settings:


 * **Page title** - class `.community-title`
 
 * **Release notes** - class `.community-sub-title`
 
 * **Feedback Instructions** - class `.community-sub-title.dev`
 
 * **Background** - class `.lp-background.conservative`
 

Here is an example of CSS code you can use:

```

.lp-background.conservative {background-image: url("https://www.testfairy.com/images/castle-cloud.jpg");}
.testfairy-app-name {color: green;}
.testfairy-description {color: red;}
.community-sub-title.dev {font-size: 30px;}

```
 
 
![css editing](/img/landing-page-customization-css-place.png)
