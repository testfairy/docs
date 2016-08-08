TestFairy allows developers to record location changes and view them in your session.

### Syntax

```
TestFairy.updateLocation(Location location)
```

## Code example

To record locations, you must first add the correct permissions to your application. Depending on your application's needs, you may want to add one or both of the following permissions to your `AndroidManifest.xml`

```
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

Once your TestFairy session has begun (see [Integrating Android SDK](http://docs.testfairy.com/Android/Integrating_Android_SDK.html), you'll have to call the static instance method `updateLocation` in the `TestFairy` class, passing in an instance of `android.location.Location`. 

```
import android.content.Context;
import android.location.Criteria;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.testfairy.TestFairy;

public class MainActivity extends AppCompatActivity implements LocationListener {

    private LocationManager locationManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Get the location manager
        locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);

        Criteria criteria = new Criteria();
        String provider = locationManager.getBestProvider(criteria, false);
        Location location = locationManager.getLastKnownLocation(provider);

        // Initialize the location fields
        if (location != null) {
            onLocationChanged(location);
        }
    }

    @Override
    public void onLocationChanged(Location location) {
        TestFairy.updateLocation(location);
    }
}
```
