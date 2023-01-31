const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
  
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Gilbert&appid=ec830cb6bbcadba6a01f871fd4500f16&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
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
    currentTemp.innerHTML = (`${data.main.temp} &deg;F`);
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
   
    captionDesc.textContent = `${desc}`;
}