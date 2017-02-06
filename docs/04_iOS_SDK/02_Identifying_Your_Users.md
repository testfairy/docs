TestFairy can automatically detect sessions recorded by the same user, however, in many cases there is some additional information that would help you generate better insights. 

### Syntax

`[TestFairy identify:@"<correlation_id>"];`

`[TestFairy identify:@"<correlation_id>" traits:<traits_nsdictionary>];`

Where `correlation_id` is a string representing an association to your backend. It may be, for example, the id of this user in your database or some random GUID. This value may not be nil, and is searchable via API and web search.

The second parameter, `traits` is optional and is a dictionary of predefined attributes and custom attributes. These attributes are available later in the session recording page, is available via API, and is searchable.

### Example 1: Identify users by email address

```
[TestFairy identify:@"" traits:@{
    TFSDKIdentityTraitEmailAddressKey: @"johns@wall.gov",
}];
```


### Example 2: Identify users by multiple traits

```
[TestFairy identify:@"ab536003-8419-4324-a673-0cdd13150dfa" traits:@{
    TFSDKIdentityTraitEmailAddressKey: @"johns@wall.gov",
    TFSDKIdentityTraitNameKey: @"John Snow",
    TFSDKIdentityTraitPhoneNumberKey: @"+672-14-5109",
    TFSDKIdentityTraitAgeKey: @14,
    @"custom.wears": @"black",
    @"custom.works_at": @"The Wall",
}];
```

It will mark this session with the values above, so when I review the recording, I have more information about the person running the app.

### Use With Segmentation

TestFairy's segmentation allows filtering in runtime. If `[TestFairy identify:]` is called prior to `[TestFairy begin:]`, the traits are available as input segmentation. For example, I may define a rule in segmentation to record sessions only if *custom.wear equals 'black', and name ends with 'Snow'*.

### Notes

1. `identify:` may be called many times, but only values used in the first call will be sent. 
2. You may call `identify` before or after `begin`.
3. `setCorrelationId` is deprecated, and is identical to calling `identify:` with nil for traits.
4. Traits keys are limited to the constants defined in *TestFairy.h*, custom attributes MUST be prefixed with `custom.` and may contain only lower-case characters and underscores. Invalid entries will be removed.
