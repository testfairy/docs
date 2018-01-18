TestFairy will log all your nerwork requst.
It will gave you an easy way to monitor your request.

A common issue our users discovered while monitoring there apps,
are **slow** requests or **404** error code, thous problems are usually hard to discover,
But fixing them can be easy and it will do significant impact for there users.

![see example](https://github.com/testfairy/docs/blob/master/img/app/logHttp.png)


### Usage :
```TestFairy.addNetworkEvent(URI uri, String method, int code, long startTimeMillis, long endTimeMillis, long requestSize, long responseSize, String errorMessage)```

### Example :
If you are using **OkHttp** or **Retrofit** all you need to do is adding CustomHttpInterceptor to your OkHttpClient

```
public class CustomHttpInterceptor implements Interceptor {

		@Override
		public Response intercept(@NonNull Chain chain) throws IOException {

			Request request = chain.request();
			long startTimeMillis = System.currentTimeMillis();
			Long requestSize = request.body() != null ? request.body().contentLength() : 0;
			Response response;
			try {
				response = chain.proceed(request);
			} catch (IOException e) {
				long endTimeMillis = System.currentTimeMillis();
				TestFairy.addNetworkEvent(request.url().uri(), request.method(), -1, startTimeMillis, endTimeMillis, requestSize, -1, e.getMessage());
				throw e;
			}

			long endTimeMillis = System.currentTimeMillis();
			long responseSize = response.body() != null ? response.body().contentLength() : 0;
			TestFairy.addNetworkEvent(request.url().uri(), request.method(), response.code(), startTimeMillis, endTimeMillis, requestSize, responseSize, null);
			return response;
		}
	}


OkHttpClient client = new OkHttpClient.Builder()
				.addInterceptor(new CustomHttpInterceptor())
				.build();
        
```
        
        
