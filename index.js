var clock = document.getElementById('clock');

var myList = [];

// now convert militry time to simple standard time
var currentTime = setInterval(function(){
    var time = new Date();
    var hours = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var ampm = (time.getHours()) < 12 ? "AM":"PM";
    if(hours>12){
        hours= hours-12;
    }
    else if(hours==0){
        hours=12;
    }
    else{
        hours = hours;
    }
         clock.textContent = addingZero(hours)+ ":"+addingZero(mins)+":"+addingZero(secs)+" "+ampm;

},1000);

function addingZero(time){
    return(time<10) ? "0" + time : time;
}

// Select The Hours Mins sec 

function hoursMenu(){
    var hour = document.getElementById('alarmhrs');
    var time = 12;
    for(let i = 1;i<=time;i++){
        hour.options[hour.options.length] = new Option(i < 10 ? "0" + i : i);
        
    }
}
hoursMenu();

function minsMenu() {
    var mins = document.getElementById('alarmmins');
    var time = 59;
    for (let i = 0; i <= time; i++) {
        mins.options[mins.options.length] = new Option(i < 10 ? "0" + i : i);

    }
}
minsMenu();

function secsMenu(){
    var sec = document.getElementById('alarmsec');
    var time = 59;
    for (let i = 0; i <= time; i++) {
        sec.options[sec.options.length] = new Option(i < 10 ? "0" + i : i);

    }
}
secsMenu();

function amPm(){
    var ampm = document.getElementById('ampm');
    var length=2;
    for (let i = 1; i <= length; i++) {
        ampm.options[ampm.options.length] = new Option(i < 2 ? "AM" : "PM");

    }
}
amPm();


// Ringining Alarm
var sound = new Audio("./music/a.mp3")
sound.loop = true;

// Create a array to store alarmtiming



function setAlarm(){
    var hour = document.getElementById('alarmhrs');
    var mins = document.getElementById('alarmmins');
    var sec = document.getElementById('alarmsec');
    var ampm = document.getElementById('ampm');


    var selectHrs = hour.options[hour.selectedIndex].value;
    var selectMins = mins.options[mins.selectedIndex].value;
    var selectSecs = sec.options[sec.selectedIndex].value;
    var selectAmPm = ampm.options[ampm.selectedIndex].value;
    
    // Alarm Time
    var alarmTime = selectHrs + ":" + selectMins + ":" + selectSecs + " " + selectAmPm;
   console.log(alarmTime);
//    put in array
    if(!myList.includes(alarmTime)){
        myList.push(alarmTime);
        // showlist(alarmTime);
        console.log(myList);
        showAlaramList(alarmTime);
        
       
    }
    
    

    var clock = document.getElementById('clock');

    setInterval(function () {

        var time = new Date();
        var hours = time.getHours();
        var mins = time.getMinutes();
        var secs = time.getSeconds();
        var ampm = (time.getHours()) < 12 ? "AM" : "PM";
        if (hours > 12) {
            hours = hours - 12;
        }
        else if (hours == 0) {
            hours = 12;
        }
        else {
            hours = hours;
        }
        var currentTimealarm = clock.textContent = addingZero(hours) + ":" + addingZero(mins) + ":" + addingZero(secs) + " " + ampm;
       
        if (alarmTime == currentTimealarm){
            console.log('Play Sound');
            sound.play();
            
        }

    }, 1000);

}

function clearAlarm(){
    sound.pause();
}

// Show The Upcoming Alaram

function showAlaramList(alarmlist){
    const html = `
    <li class = "time-list">        
        <span class="time">${alarmlist}</span>
        <button class="deleteAlarm" id="delete-button" onclick = "remove(this.value)" value=${alarmlist}>Delete Alarm</button>       
    </li>`
    list.innerHTML += html
    
}

// remove the alarm

list.addEventListener('click', e => {
    console.log("removing element")
    if (e.target.classList.contains("deleteAlarm")) {
        e.target.parentElement.remove();
    }
})


// removes an alarm from the array when "Delete Alarm" is clicked
remove = (value) => {
    let newList = myList.filter((time) => time != value);
    myList.length = 0;                  // Clear contents
    myList.push.apply(myList, newList);

    console.log("newList", newList);
    console.log("alarmList", myList);
}

