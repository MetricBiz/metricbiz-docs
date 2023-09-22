OkHttpClient client=new OkHttpClient();

Request request=new Request.Builder()
.url("https://app.metricbiz.com/v1/api/companies/"+cui+"?currency="+currency)
.get()
.build();

Response response=client.newCall(request).execute();