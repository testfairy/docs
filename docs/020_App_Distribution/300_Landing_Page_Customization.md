
Landing pages created for app distribution can be customized to have the look and feel of your company or brand.

The default landing page that is automatically generated looks like this:

![landing page](/img/landing-page-customization-areas.png)

The following elements can be changed via the **Add custom CSS** option in the landing page settings:

 * **Page title** - `.testfairy-app-name`

 * **Release notes** - `.testfairy-description`

 * **Feedback Instructions** - `.community-sub-title.dev`

 * **Background** - `.testfairy-background`

Here is an example for CSS code you can use to customize your landing page:

```

.testfairy-background {background-image: url("https://www.testfairy.com/images/castle-cloud.jpg") !important;}
.testfairy-app-name {color: green;}
.testfairy-description {color: red;}
.community-sub-title.dev {color: blue;}

```

![css editing](/img/landing-page-customization-css-place.png)
