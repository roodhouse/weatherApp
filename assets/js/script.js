var searchFormEl = document.querySelector('#searchForm');
var now = moment();

function handleSearchFormSubmit(event) {
    event.preventDefault();
    
    var searchInput = document.querySelector('#inputAddress').value.trim();
    
    if(!searchInput) {
        console.error('you need to enter a city name');
        return;
    }

    var weatherID = 'c8f1691dc64bbe3d8a5bed446e29cbbf';

    var queryString = 'https://api.openweathermap.org/data/2.5/forecast?q='+searchInput+',us&units=imperial&appid='+weatherID+'';
    

    fetch(queryString)
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
        }

        return response.json();
    })

    .then(function (locRes) {

        var today            = now.format("MM/DD/YYYY");

        $('#cityName').html(locRes.city.name+' ('+ today +') '+locRes.list[0].weather[0].icon);
        console.log(locRes.city.name);

        var cityTemp         = locRes.list[0].main.temp;
        var cityWind         = locRes.list[0].wind.speed;
        var cityHumidity     = locRes.list[0].main.humidity;
        // var cityUv        = 
        var dayZeroDate      = now.format("MM/DD/YYYY");
        var dayZeroTemp      = locRes.list[4].main.temp;
        var dayZeroWind      = locRes.list[4].wind.speed;
        var dayZeroHumidity  = locRes.list[4].main.humidity;
        var dayOneDate       = now.add(1, 'day').format("MM/DD/YYYY");
        var dayOneTemp       = locRes.list[12].main.temp;
        var dayOneWind       = locRes.list[12].wind.speed;
        var dayOneHumidity   = locRes.list[12].main.humidity;
        var dayTwoDate       = now.add(2, 'days').format("MM/DD/YYYY");
        var dayTwoTemp       = locRes.list[20].main.temp;
        var dayTwoWind       = locRes.list[20].wind.speed;
        var dayTwoHumidity   = locRes.list[20].main.humidity;
        var dayThreeDate     = now.add(3, 'days').format("MM/DD/YYYY");
        var dayThreeTemp     = locRes.list[28].main.temp;
        var dayThreeWind     = locRes.list[28].wind.speed;
        var dayThreeHumidity = locRes.list[28].main.humidity;
        var dayFourDate      = now.add(4, 'days').format("MM/DD/YYYY");
        var dayFourTemp      = locRes.list[36].main.temp;
        var dayFourWind      = locRes.list[36].wind.speed;
        var dayFourHumidity  = locRes.list[36].main.humidity;

        $('#cityTemp').html(cityTemp);
        $('#cityWind').html(cityWind);
        $('#cityHumidity').html(cityHumidity);
        // $('#uvSpan').html(cityUv);
        $('#dayZeroDate').html(dayZeroDate);
        $('#dayZeroTemp').html(dayZeroTemp);
        $('#dayZeroWind').html(dayZeroWind);
        $('#dayZeroHumidity').html(dayZeroHumidity);
        $('#dayOneDate').html(dayOneDate);
        $('#dayOneTemp').html(dayOneTemp);
        $('#dayOneWind').html(dayOneWind);
        $('#dayOneHumidity').html(dayOneHumidity);
        $('#dayTwoDate').html(dayTwoDate);
        $('#dayTwoTemp').html(dayTwoTemp);
        $('#dayTwoWind').html(dayTwoWind);
        $('#dayTwoHumidity').html(dayTwoHumidity);
        $('#dayThreeDate').html(dayThreeDate);
        $('#dayThreeTemp').html(dayThreeTemp);
        $('#dayThreeWind').html(dayThreeWind);
        $('#dayThreeHumidity').html(dayThreeHumidity);
        $('#dayFourDate').html(dayFourDate);
        $('#dayFourTemp').html(dayFourTemp);
        $('#dayFourWind').html(dayFourWind);
        $('#dayFourHumidity').html(dayFourHumidity);

        console.log(locRes)
    })
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

// troubleshoot missing info
// uv and icons missing
// save the recent searches to local storage and to below the search bar -- 1st priority 