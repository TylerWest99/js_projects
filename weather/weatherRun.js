// JavaScript source code
//weather app node js


var weather = require('weather-js');
function main() {
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
        if (currentTimeHour > 12) {
            currentTime = (currentTimeHour - 12) + ":" + currentTimeMin + " PM";
        }
        else if (currentTimeHour == 12) {
            currentTime = (currentTimeHour) + ":" + currentTimeMin + "PM";
        }
        else if (currentTimeHour == 0) {
            currentTime = (currentTimeHour + 12) + ":" + currentTimeMin + "AM";
        }
        else {
            currentTime = currentTimeHour + ":" + currentTimeMin + " AM";
        }

        function printData() {
            console.log("On " + currentDay + " the " + dateDay + " of " + months[dateMonth - 1] + ", " + dateYear + " at " + currentTime);
            console.log("The current Temperature is " + currentTemp + " degrees");
            console.log("And it feels like " + currentFeelsLike + " degrees");
            console.log("And it is " + currentSkies);
            console.log("The windspeed is " + currentWindSpeed);
            console.log("The humidity is " + currentHumidity);
        }//function to print useful info

        printData();
    });
}// main running method

main();
