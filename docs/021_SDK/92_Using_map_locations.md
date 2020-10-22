The TestFairy SDK does not require location permissions and does track location out of the box.

In cases where developers whish to send location information to TestFairy, they will need to add location permissions to their app, and use the code below to call TestFairy.updateLocation. After doing that, location will be presented on a map as part of the session page.

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;"  href="#android">
			<div>Android</div>
		</a>
		<a data-w-tab="tab-ios-objc" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#ios-objc">
			<div>iOS - Objective C</div>
		</a>
	</div>

	<div class="docs-tabs-content w-tab-content">
		<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
		<p>To record locations, you must first add the correct permissions to your application. Depending on your application's needs, you may want to add one or both of the following permissions to your <code>AndroidManifest.xml</code></p>
		<pre><code class=" hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">uses-permission</span> <span class="hljs-attribute">android:name</span>=<span class="hljs-value">"android.permission.ACCESS_COARSE_LOCATION"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">uses-permission</span> <span class="hljs-attribute">android:name</span>=<span class="hljs-value">"android.permission.ACCESS_FINE_LOCATION"</span> /&gt;</span>
</code></pre>

			<h3>Syntax</h3>
			<p>
				<b>
				TestFairy.updateLocation(android.location.Location location)
				</b>
			</p>

			<h3>Code Example</h3>
<pre><code class=" hljs java"><span class="hljs-keyword">import</span> android.content.Context;
<span class="hljs-keyword">import</span> android.location.Criteria;
<span class="hljs-keyword">import</span> android.location.Location;
<span class="hljs-keyword">import</span> android.location.LocationListener;
<span class="hljs-keyword">import</span> android.location.LocationManager;
<span class="hljs-keyword">import</span> android.support.v7.app.AppCompatActivity;
<span class="hljs-keyword">import</span> android.os.Bundle;

<span class="hljs-keyword">import</span> com.testfairy.TestFairy;

<span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MainActivity</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">AppCompatActivity</span> <span class="hljs-keyword">implements</span> <span class="hljs-title">LocationListener</span> {</span>

    <span class="hljs-keyword">private</span> LocationManager locationManager;

    <span class="hljs-annotation">@Override</span>
    <span class="hljs-keyword">protected</span> <span class="hljs-keyword">void</span> <span class="hljs-title">onCreate</span>(Bundle savedInstanceState) {
        <span class="hljs-keyword">super</span>.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        <span class="hljs-comment">// Get the location manager</span>
        locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);

        Criteria criteria = <span class="hljs-keyword">new</span> Criteria();
        String provider = locationManager.getBestProvider(criteria, <span class="hljs-keyword">false</span>);
        Location location = locationManager.getLastKnownLocation(provider);

        <span class="hljs-comment">// Initialize the location fields</span>
        <span class="hljs-keyword">if</span> (location != <span class="hljs-keyword">null</span>) {
            onLocationChanged(location);
        }
    }

    <span class="hljs-annotation">@Override</span>
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">onLocationChanged</span>(Location location) {
        TestFairy.updateLocation(location);
    }
}
</code></pre>
		</div>

		<div data-w-tab="tab-ios-objc" class="w-tab-pane">
			<p>To record locations, all you need to do is call the static instance method <code>updateLocation</code> in the <code>TestFairy</code> class, passing in a collection of <code>CLLocations</code>.</p>
			<h3>Syntax</h3>
			<p>
				<b>
				NSArray&lt;CLLocation *&gt; *locations = ... <br/>
				[TestFairy updateLocation:locations];
				</b>
			</p>

			<h3>Code Example</h3>
<pre><code class=" hljs objectivec"><span class="hljs-preprocessor">#import <span class="hljs-title">"TestFairy.h"</span></span>

<span class="hljs-class"><span class="hljs-keyword">@interface</span> <span class="hljs-title">NewRunViewController</span>: <span class="hljs-title">UIViewController</span> &lt;<span class="hljs-title">CLLocationManagerDelegate</span>&gt;</span>
- (<span class="hljs-keyword">void</span>)viewDidLoad
{
    [<span class="hljs-keyword">super</span> viewDidLoad];

    <span class="hljs-keyword">self</span><span class="hljs-variable">.locationManager</span> = [[CLLocationManager alloc] init];
    <span class="hljs-keyword">self</span><span class="hljs-variable">.locationManager</span><span class="hljs-variable">.delegate</span> = <span class="hljs-keyword">self</span>;
    <span class="hljs-keyword">self</span><span class="hljs-variable">.locationManager</span><span class="hljs-variable">.distanceFilter</span> = kCLDistanceFilterNone;
    <span class="hljs-keyword">self</span><span class="hljs-variable">.locationManager</span><span class="hljs-variable">.desiredAccuracy</span> = kCLLocationAccuracyBest;
    [<span class="hljs-keyword">self</span><span class="hljs-variable">.locationManager</span> startUpdatingLocation];
}

...

-(<span class="hljs-keyword">void</span>)locationManager:(CLLocationManager *)manager didUpdateLocations:(<span class="hljs-built_in">NSArray</span>&lt;CLLocation *&gt; *)locations {
    [TestFairy updateLocation:locations];
}

<span class="hljs-keyword">@end</span>
</code></pre>
		</div>

	</div>


</div>
