### How do I see events such as buffering and playback statuses for video players in my TestFairy dashboard?

You can take a look at [this blog post](https://blog.testfairy.com/tracking-video-events-in-android-tv-with-mediaplayer/) to do it manually or copy [this](https://github.com/testfairy-blog/TestFairyMediaPlayerGlue/blob/master/TestFairyMediaPlayerGlue.java) utility file in your project. 

Once you import the extension, you can initialize the tracker with these one liners.

```java
// Initialize
TestFairyMediaPlayerGlue.PlayerWrapper wrapper = TestFairyMediaPlayerGlue.createByWrapping(myMediaPlayer);
// use wrapper to configure further listeners and behavior
```

or

```java
// Initialize
TestFairyMediaPlayerGlue.PlayerAdapterWrapper wrapper = TestFairyMediaPlayerGlue.createByWrapping(myPlayerAdapter);
// use wrapper to configure further listeners and behavior
```
