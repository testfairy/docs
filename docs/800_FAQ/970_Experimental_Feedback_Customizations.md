Do you want to add custom input fields to the submitted feedbacks?

TestFairy SDK is transitioning to a new layout system which provides a fully customizable feedback form experience with its experimental `FeedbackOptions` API.

Warning : Support for custom fields is still in its early stages. All class names and method signatures may change during development.

This API consists of an interface to adapt any native view to the form, and some built-in implementations of it for basic field types such as text areas and pickers.

To get started, copy the code below and modify it according to your needs.

```java
			Map<String, String> cities = new HashMap<>();
			//cities.put(humanReadableName, machineReadableName)
			cities.put("London", "London");
			cities.put("Paris", "Paris");
			cities.put("Berlin", "Berlin");
			cities.put("Los Angeles", "Los Angeles");
			cities.put("Beijing", "Beijing");

			Map<String, String> currencies = new HashMap<>();
			//currencies.put(humanReadableName, machineReadableName)
			currencies.put("USD", "USD");
			currencies.put("EUR", "EUR");
			currencies.put("GBP", "GBP");
			currencies.put("CNY", "CNY");

			List<FeedbackFormField> fields = new ArrayList<>();
			fields.add(new StringFeedbackFormField(":userId", "Email", ""));
			fields.add(new TextAreaFeedbackFormField(":text", "Your message", ""));
			fields.add(new StringFeedbackFormField("city", "City", ""));
			fields.add(new SelectFeedbackFormField("currency", "Currency", currencies, "GBP"));

			TestFairy.setFeedbackOptions(
				new FeedbackOptions.Builder()
					.setFeedbackFormFields(fields)
					.setFeedbackInterceptor(new MyFeedbackInterceptor()) // Implement an interceptor to modify user input before feedback submission
					.build()
			);

      TestFairy.setFeedbackVerifier(new MyFeedbackVerifier()); // Implement a verifier for custom validation
			TestFairy.showFeedbackForm(context, APP_TOKEN, false);
```

Values set in these fields will be accessible by feedback interceptors and verifiers under `FeedbackContent::getAttributes()`.

### StringFeedbackFormField

A single line text input. Mainly used for emails, phone numbers and similar identifiers.

### TextAreaFeedbackFormField

A multi line text input. Mainly used for feedback messages and Q/A sections.

### SelectFeedbackFormField

A single choice picker for choosing from a set of predefined values. Mainly used for area codes, currencies or questions with single, definite answers.

### FeedbackFormField

An interface any app developer can implement to inject custom made views into the form hierarchy.
