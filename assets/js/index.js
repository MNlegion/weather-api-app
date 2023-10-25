
const apiKey = 'e9fe7b78654e60c910997496410c10f6';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=tampa&appid=' + apiKey;


async function checkWeather() {
    const response = await fetch(apiUrl);
    var data = await response.json();

    console.log(data);
};

checkWeather();