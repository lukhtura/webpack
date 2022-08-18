// import './styles/styles.css';
import './styles/scss.scss';

fetch('https://api.openweathermap.org/data/2.5/weather?q=MELITOPOL&units=metric&lang=ru&temp&APPID=5d066958a60d315387d9492393935c19')
  .then(function (resp) {
    return resp.json()
  })
  .then(function (data) {
    document.querySelector('.city-output').innerHTML = data.name;
    document.querySelector('.temp-output').innerHTML = Math.round(data.main.temp) + '\u00B0';
    document.querySelector('.pressure-output').innerHTML = data.main.pressure;
    document.querySelector('.description-output').innerHTML = data.weather[0].description;
    document.querySelector('.humidity-output').innerHTML = data.main.humidity;
    document.querySelector('.wind-output').innerHTML = Math.round(data.wind.speed) + ' м/c';
    document.querySelector('.deg-output').innerHTML = Math.round(data.wind.deg) + '\u00B0';
    document.querySelector('.icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  });