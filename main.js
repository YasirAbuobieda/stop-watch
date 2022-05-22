// global varibales
const time_el = document.querySelector(".watch .time");

const start_btn = document.getElementById("start");

const stop_btn = document.getElementById("stop");

const reset_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;
// Event Listener
start_btn.addEventListener("click", start)
stop_btn.addEventListener("click", stop)
reset_btn.addEventListener("click", reset)

// upadate the timer
function timer() {
  seconds++;

  // format our time
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor( seconds / 60);
  let secs = seconds % 60;

    if (secs < 10) secs = "0" + secs;
    if (hrs < 10) hrs = "0" + hrs;
    if (mins < 10) mins = "0" + mins;

  time_el.innerHTML = `${hrs}:${mins}:${secs}`;
}
timer();
// `${hrs}:${mins}:${secs}`


// start function 

function start() {
    if (interval) {
        return;
    
    }

    interval = setInterval(timer, 1000)

}


// stop function 

function stop() {
    
 clearInterval (interval)
 interval = null

}


// reset function 

function reset() {
    
    stop();
    seconds = 0;
    time_el.innerHTML = "00:00:00"
    
}