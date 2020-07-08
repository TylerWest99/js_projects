//weather app node js

var weather = require('weather-js');
const readline = require("readline");
//let temps = [];

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
        }
        //temps.push(currentTemp);

        function printData(){
        console.log("On " + currentDay + " the " + dateDay + " of " + months[dateMonth - 1] + ", " + dateYear);
        console.log("The current Temperature is " + currentTemp + " degrees");
        console.log("But it feels like " + currentFeelsLike + " degrees");
        console.log("And it is " + currentSkies);
        console.log("The windspeed is " + currentWindSpeed);
        console.log("The humidity is " + currentHumidity);
        console.log("The current time is " + currentTime);
    }//function to print useful info
        printData();
    });
}
async function wait() {
    let p;
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("Done"), 10000);
    });
    p = await promise;
}//waits 1 hour

async function Main() {
    let num = 1;
    while (num < 25) {
        //console.log(temps);
        mainData();
        console.log(num);
        await wait();
        num++;

    }
}//collects all kinds of weather data at an hour interval all day
Main(); 