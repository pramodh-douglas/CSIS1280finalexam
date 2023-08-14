// Student name : Pramodh Rajapakse
// Student number : 300373208

// variable to store current clock format
var currClockFormat = 12;

// function to run 12H clock
function startTime() {
    // calculating current time
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;

    if(currClockFormat === 12) {
        hr = (hr > 12) ? hr - 12 : hr;
    }

    // format values with 0 if needed
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);

    // displaying values on html elements
    document.getElementById("hours").innerHTML = hr;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    if (currClockFormat === 12) {
        document.getElementById("session").innerHTML = ap;
    } else {
        document.getElementById("session").innerHTML = "";
    }
    
    // month array
    var months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    // day array
    var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    
    // calculating current date
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curMonth + " " + curDay + ", " + curYear;
    document.getElementById("date").innerHTML = date;
    document.getElementById("day").innerHTML = curWeekDay;
    
    // run function every second
    setTimeout(function(){ startTime() }, 1000);
}

// function to check whether the value needs a 0 in front
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// function to switch the clock format
function switchClockFormat() {
    if(currClockFormat === 12) {
        currClockFormat = 24;
    } else {
        currClockFormat = 12;
    }
    startTime()
}

startTime();