// Defined Variables
var APIKey = "104f10c4aa9b29656ab75accd63edf29";


// Create function - on click for city name search
// function getWeather(cityName) {
    
    // URL to query the Open Weather database, adding our cityName and API Key
    // var queryURL = "api.openweathermap.org/data/2.5/forecast?id=" + cityName + "&appid=" + APIKey;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=Bujumbura,Burundi&appid=" + APIKey;

    // AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"

        // store all of the retrieved data inside of an object called "response"
        }).then(function(response) {

            // Log the queryURL
            console.log(queryURL);

            // Log the resulting object
            console.log(response);
    })
    
// }


    // Present CURRENT and future conidtions
        // city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index 

            // UX index presented with color that indicates whether the conditions are favorable, moderate, or severe

    // Present FUTURE conditions
        // 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

    // Add city to recent search log

        // Display recent searches under search input

        // If clicked again, present with current and future conditions for that city

    // Keep last sesarch in local storage

        // When page is opened, present the last searched city results.