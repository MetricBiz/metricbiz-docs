using System;
using System.Net.Http;
using System.Threading.Tasks;

public class Program
{
    private static readonly HttpClient httpClient = new HttpClient();

    public static async Task Main(string[] args)
    {
        var cui = "YOUR_CUI_HERE";
        var currency = "YOUR_CURRENCY_HERE"; // Default: RON

        var response = await httpClient.GetAsync($"https://app.metricbiz.com/v1/api//companies/{cui}?currency={currency}");

        if (response.IsSuccessStatusCode)
        {
            var content = await response.Content.ReadAsStringAsync();
            Console.WriteLine(content);
        }
        else
        {
            Console.WriteLine($"Error: {response.StatusCode}");
        }
    }
}
