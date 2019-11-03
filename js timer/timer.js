document.addEventListener('DOMContentLoaded', function(){
    'use strict';

    //timer

    let dedline = '2019-11-10 13:11';

    //find out the time span

    function timeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()); //calculate the difference between future and present time (milliseconds)
        let seconds = Math.floor((t/1000) % 60), //get seconds
            minutes = Math.floor((t/1000/60) % 60), //get minutes
            hours = Math.floor((t/(1000*60*60))); //get hours
            // hours = Math.floor((t/1000/60/60) % 24), //get hours
            // days = Math.floor(t/(1000*60*60*24)); //get days

        if(seconds <= 9){seconds = '0' + seconds;}
        if(minutes <= 9){minutes = '0' + minutes;}
        if(hours <= 9){hours = '0' + hours;}
        //output data as an object
        return{                 
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }
   		//to html
    function setClock(id, endtime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        //set timer
        function updateClock(){
            let t = timeRemaining(endtime); //function start every second
            // set elements to layout
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            //timer stop
            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }
setClock('timer', dedline);
});