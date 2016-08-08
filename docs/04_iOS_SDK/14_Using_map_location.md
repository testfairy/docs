TestFairy allows developers to record location changes and view them in your session.

### Syntax

**`NSArray<CLLocation *> *locations = ...`**
**`[TestFairy updateLocation:locations];`**

### Code example

To record locations, all you need to do is call the static instance method `updateLocation` in the `TestFairy` class, passing in a collection of `CLLocations`.

```
#import "TestFairy.h"

@interface NewRunViewController: UIViewController <CLLocationManagerDelegate>
- (void)viewDidLoad
{
	[super viewDidLoad];

	self.locationManager = [[CLLocationManager alloc] init];
	self.locationManager.delegate = self;
	self.locationManager.distanceFilter = kCLDistanceFilterNone;
	self.locationManager.desiredAccuracy = kCLLocationAccuracyBest;
	[self.locationManager startUpdatingLocation];
}

...

-(void)locationManager:(CLLocationManager *)manager didUpdateLocations:(NSArray<CLLocation *> *)locations {
	[TestFairy updateLocation:locations];
}

@end
```