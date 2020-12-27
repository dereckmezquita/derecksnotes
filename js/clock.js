// Toggle time-zones
let locals = [
    "San Francisco",
    "New York",
    "Paris",
    "Moscow",
    "Hong Kong",
    "Tokyo"
];

function toggleZones() {

};

// Clock
setInterval(function() {
    const currentTime = new Date();

    const currentMonth = currentTime.toLocaleString('en-us', {month: 'short'});
    const currentDay = currentTime.getDate();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();

    // Current is being called and converted in the variable with .toLocalString
    const formattedTime = `${currentDay.addPadding()} ${currentMonth} ${currentHour.addPadding()}:${currentMinute.addPadding()}:${currentSecond.addPadding()}`;

    document.querySelector(".clock").innerHTML = formattedTime;
    let sideClock = false;
    sideClock = document.querySelector(".sideClock");
    if(sideClock) {
        document.querySelector(".sideClock").innerHTML = formattedTime;
    }
}, 1000);

// This is a prototype it converts the values to strings and then adds 0 when under 10
Number.prototype.addPadding = function() {
    return ((this < 10) ? ('0' + this.toString()) : (this.toString()));
};

// window.addEventListener('DOMContentLoaded', () => {
//     let timer;
//     const timerDisplay = document.querySelector(".timerCount");

//     document.getElementById('startTimer').addEventListener('click', () => {
//         if(timer !== undefined) {
//             clearInterval(timer);
//         };

//         timerDisplay.innerHTML = "00:00:00";

//         const startTime = Date.now();
//         console.log(startTime);

//         timer = setInterval(function() {
//             const timePassed = Date.now() - startTime;
//             let remainder;
            
//             let hours = Math.round(timePassed / 3600000);
//             remainder = timePassed % 3600000;
            
//             let minutes = Math.round(remainder / 60000);
//             remainder = remainder % 60000;

//             let seconds = Math.round(remainder / 1000);

//             let timeElapsed = hours.addPadding()  + ":" + minutes.addPadding()  + ":" + seconds.addPadding();
//             console.log(timeElapsed);

//             timerDisplay.innerHTML = timeElapsed;
//         }, 950);
//     });
// });