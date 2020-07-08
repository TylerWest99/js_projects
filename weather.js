//weather app node js

var weather = require('weather-js');
const readline = require("readline");
//arrays of data :)
let temps = []; //temps throughout the day
let times = []; //time stamps of the day
let feelsLikeTemps = [];//feels like temps for day
let winds = [];
let humidity = [];
let skies = [];

function mainData() {
    
    weather.find({ search: 'Wixom, MI', degreeType: 'F' }, function (err, result) {
        if (err) console.log(err);
        //vars 
        let location = result[0].location.name;
        let dateYear = result[0].current.date[0] + result[0].current.date[1] + result[0].current.date[2] + result[0].current.date[3];
        let dateMonth = result[0].current.date[5] + result[0].current.date[6];
        let dateDay = result[0].current.date[8] + result[0].current.date[9];
        let currentDay = result[0].current.day;
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let currentSkies = result[0].current.skytext;
        let currentTemp = result[0].current.temperature;
        let currentFeelsLike = result[0].current.feelslike;
        let currentWindSpeed = result[0].current.windspeed;
        let currentHumidity = result[0].current.humidity + '%';
        let currentTimeHour = Number(result[0].current.observationtime[0] + result[0].current.observationtime[1]);
        let currentTimeMin = Number(result[0].current.observationtime[3] + result[0].current.observationtime[4]);
        let currentTime;
        if (currentTimeHour >= 12) {
            currentTime = (currentTimeHour - 12) + ":" + currentTimeMin + " PM";
        } else {
            currentTime = currentTimeHour + ":" + currentTimeMin + " AM";
        }//figures out current time
        //array setters
        times.push(currentTime);
        temps.push(currentTemp);
        feelsLikeTemps.push(currentFeelsLike);
        winds.push(currentWindSpeed);
        humidity.push(currentHumidity);
        skies.push(currentSkies);
    });
}
async function wait() {
    let p;
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("Done"),3600000);//3600000 for an hour (5 0s)
    });
    p = await promise;
}//waits 1 hour
function arrayLoop() {
    for (var i = 0; i < times.length; i++) {
        console.log("At " + times[i] + ":"); //shows time logged 
        console.log("Temperature: " + temps[i]);// shows the temps 
        console.log("Feels like: " + feelsLikeTemps[i]); //shows feels like temps 
        console.log("The skies are: " + skies[i]); //shows skies
        console.log("The humidity is: " + humidity[i]); //shows humidity
        console.log("The winds are: " + winds[i]); //shows winds
        console.log("");

    }
}

async function Main() {
    let num = 1;
    while (num < 25) {
        mainData();
        console.log(num);
        await wait();
        num++;
    }
    console.log("");
   arrayLoop();
}//collects all kinds of weather data at an hour interval all day
Main(); 