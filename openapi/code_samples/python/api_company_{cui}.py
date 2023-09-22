import requests

cui = "YOUR_CUI_HERE"
currency = "YOUR_CURRENCY_HERE" # Default: RON

response = requests.get(f"https://app.metricbiz.com/v1/api//companies/{cui}", params={"currency": currency})

data = response.json()
print(data)