
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const forecast = document.querySelector('#forecast1');
const forecast2 = document.querySelector('#forecast2');
const forecast3 = document.querySelector('#forecast3');
const tempOne = document.querySelector('#tempone');
const tempTwo = document.querySelector('#temptwo');
const tempThree = document.querySelector('#tempthree');  

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Gilbert&appid=ec830cb6bbcadba6a01f871fd4500f16&units=imperial';
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?q=Gilbert&appid=ec830cb6bbcadba6a01f871fd4500f16&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(response.text);
        }
    } catch (error) {
            console.log(error);
        }
}
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
    captionDesc.textContent = ` ${desc}`;
}

async function apiForecast() {
    try {
        const response = await fetch(forecasturl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(response.text);
        }
    } catch (error) {
            console.log(error);
        }
}
apiForecast();

const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function displayForecast(data) {
    const firstDay = weekDay[new Date(`${data.list[2].dt_txt}`).getDay()]; 
    const secondDay = weekDay[new Date(`${data.list[10].dt_txt}`).getDay()]; 
    const thirdDay = weekDay[new Date(`${data.list[18].dt_txt}`).getDay()]; 
    const oneT = `${Math.round(data.list[0].main.temp)} &deg;F`;
    const twoT = `${Math.round(data.list[3].main.temp)} &deg;F`;
    const threeT = `${Math.round(data.list[11].main.temp)} &deg;F`;
    console.log(data);
    forecast.innerHTML = firstDay;
    forecast2.innerHTML = secondDay;
    forecast3.innerHTML = thirdDay;
    tempOne.innerHTML = oneT;
    tempTwo.innerHTML = twoT;
    tempThree.innerHTML = threeT;
}