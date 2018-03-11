let latitude = 41.8781
let longitude = 87.6298
let apiKey = '2d044d02ff35f21681e17c744f821556';

var weatherServiceURL = 'https://api.openweathermap.org/data/2.5//forecast?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

var weather = new Request(weatherServiceURL);

  fetch(weather)
    .then(function(response) {
    console.log(response.json())

    $.getJSON(weatherServiceURL, function(data) {
        $("#w1").html(`<div class="media wow fadeInDown"> <a href="https://weather.com/weather/tenday/l/Chicago+IL+USIL0225:1:US" class="media-left"> <img alt="" src="http://openweathermap.org/img/w/${data.list["0"].weather["0"].icon}.png"> </a>
          <div class="media-body"> <a href="https://weather.com/weather/tenday/l/Chicago+IL+USIL0225:1:US" class="catg_title"><br>Date: ${data.list["0"].dt_txt} <br> Min Temp: ${data.list["0"].main.temp_min.toFixed(0)} Max Temp: ${data.list["0"].main.temp_max.toFixed(0)}</a> </div>
        </div>`)
        $("#w2").html(`<div class="media wow fadeInDown"> <a href="https://weather.com/weather/tenday/l/Chicago+IL+USIL0225:1:US" class="media-left"> <img alt="" src="http://openweathermap.org/img/w/${data.list["7"].weather["0"].icon}.png"> </a>
          <div class="media-body"> <a href="https://weather.com/weather/tenday/l/Chicago+IL+USIL0225:1:US" class="catg_title"><br>Date: ${data.list["7"].dt_txt} <br> Min Temp: ${data.list["7"].main.temp_min.toFixed(0)} Max Temp: ${data.list["7"].main.temp_max.toFixed(0)}</a> </div>
        </div>`)
        $("#w3").html(`<div class="media wow fadeInDown"> <a href="https://weather.com/weather/tenday/l/Chicago+IL+USIL0225:1:US" class="media-left"> <img alt="" src="http://openweathermap.org/img/w/${data.list["15"].weather["0"].icon}.png"> </a>
          <div class="media-body"> <a href="https://weather.com/weather/tenday/l/Chicago+IL+USIL0225:1:US" class="catg_title"><br>Date: ${data.list["15"].dt_txt} <br> Min Temp: ${data.list["15"].main.temp_min.toFixed(0)} Max Temp: ${data.list["15"].main.temp_max.toFixed(0)}</a> </div>
        </div>`)
        console.log("Got Weather", data)
      })
})
