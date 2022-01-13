
var start=document.getElementById('start');
var stop=document.getElementById('stop');
//next cycle counter
var count=0
var next=document.getElementById('next');
var cycle=document.getElementById('cycle')

next.onclick = function () {
    count++;
    cycle.innerHTML = count;
}



var wm=document.getElementById('w_minutes');
var ws=document.getElementById('w_seconds');

var bm=document.getElementById('b_minutes');
var bs=document.getElementById('b_seconds');

var lbm=document.getElementById('lb_minutes');
var lbs=document.getElementById('lb_seconds');

//timer start
var startTimer;

start.addEventListener('click',function(){
    if (startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert('timer is already running');
    }
})

next.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";
   
    stopInterval()
    startTimer = undefined;
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    stopInterval()
    startTimer = undefined;
})
stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})
//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }
    
    //long break timer countdown
    if(cycle.length == 4 ){
        if(wm.innerText != 0 && ws.innerText == 0){
            if(lbs.innerText != 0){
                lbs.innerText--;
            } else if(lbm.innerText != 0 && lbs.innerText == 0){
                lbs.innerText = 59;
                lbm.innerText--;
            }
        }
    }
   


}
function stopInterval(){
    clearInterval(startTimer);
}







