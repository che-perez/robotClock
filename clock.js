function clock(){
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var seconds = time.getSeconds();
    var mid = "AM";
    
    if(hour == 0) {
        hour = 12;
    }
    
    if(hour > 12) {
        hour = hour - 12;
         mid = "PM";
    }
    
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    var tiempo = hour + ":" + minute + ":" + seconds +  " " + mid;
    
    document.getElementById("time").innerHTML = tiempo;
    
    
    setInterval(clock, 1000);
}

clock();


function wakeup() {
    var blink = document.getElementById('laser');
    blink.setAttribute('class','eyes');
	document.getElementById("roboto").play();
}

function getTimeoutSec() {
	var time = new Date();
	var currSecs = time.getSeconds() + (60 * time.getMinutes()) + (60 * 60 * time.getHours());

    var mid = document.getElementById('mid').value;
    var setHour = parseInt(document.getElementById('hours').value);
    if(mid == 'PM') {
		setHour += 12;
	}
	var setMin = parseInt(document.getElementById('minutes').value);
	var setSeconds = (setHour * 3600) + (setMin * 60);
    return setSeconds - currSecs;
}

window.onload = function() {
    var scheduleTimerButton = document.getElementById('alarm');
scheduleTimerButton.addEventListener('click', function() {
   
    var secRemaining = getTimeoutSec();
    setTimeout(wakeup, secRemaining * 1000);
}, false);
};