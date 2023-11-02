const apiKey = "e9fe7b78654e60c910997496410c10f6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const userSearch = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " mph";
  document.querySelector(".description").innerHTML = data.weather[0].description;


}

searchBtn.addEventListener("click", () => {
    checkWeather(userSearch.value);

    console.log(userSearch.value);
});


