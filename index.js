const minCount = document.querySelector(".minCount");
const minCountInCountdown = document.querySelector(".minCountInCountdown");
const secCount = document.querySelector(".secCount");
const secCountInCountdown = document.querySelector(".secCountInCountdown");
const startBtn = document.querySelector(".startBtn");
const startBtnInCountdown = document.querySelector(".startBtnInCountdown");
const stopBtn = document.querySelector(".stopBtn");
const stopBtnInCountdown = document.querySelector(".stopBtnInCountdown");
const timeCounter = document.querySelector("#timeCounter");
const countdown = document.querySelector("#countdown");
const timeCounterConvertor = document.querySelector(".timeCounterConvertor");
const countdownConvertor = document.querySelector(".countdownConvertor");

stopBtn.style.display = "none";
stopBtnInCountdown.style.display = "none";
timeCounterConvertor.style.display = "none";
countdown.style.display = "none";

function countdownConvert(){
    timeCounter.style.display = "none";
    countdownConvertor.style.display = "none";
    countdown.style.display = "flex";
    timeCounterConvertor.style.display = "block";
}

function timeCounterConvert(){
    timeCounter.style.display = "flex";
    countdownConvertor.style.display = "block";
    countdown.style.display = "none";
    timeCounterConvertor.style.display = "none";
}


let count = 0;
let timerId = 0;

function updateText(count){
    const min = Math.floor(count / 60);
    const sec = Math.floor(count % 60);
    minCount.textContent = min < 10 ? `0${min}` : min;
    secCount.textContent = sec < 10 ? `0${sec}` : sec;
}

function countingStart(){
    startBtn.style.display = "none";
    stopBtn.style.display = "block";

    if(timerId !== 0) return;
    timerId = setInterval(function(){
        count++;
        updateText(count);
    },1000);
}

function countingStop(){
    stopBtn.style.display = "none";
    startBtn.style.display = "block";

    clearInterval(timerId);
    timerId = 0;
}

function countingRestart(){
    stopBtn.style.display = "none";
    startBtn.style.display = "block";

    clearInterval(timerId);
    timerId = 0;
    count = 0;
    updateText(count);
}

// ----------------------------------------------------------------------------------------

let countInCountdown = 300;
let timerIdInCountdown = 0;

updateTextInCountdown(countInCountdown);

function updateTextInCountdown(countInCountdown){
    const minInCountdown = Math.floor(countInCountdown / 60);
    const secInCountdown = Math.floor(countInCountdown % 60);
    minCountInCountdown.textContent = minInCountdown < 10 ? `0${minInCountdown}` : minInCountdown;
    secCountInCountdown.textContent = secInCountdown < 10 ? `0${secInCountdown}` : secInCountdown;
}

function countingStartInCountdown(){
    startBtnInCountdown.style.display = "none";
    stopBtnInCountdown.style.display = "block";

    if(timerIdInCountdown !== 0) return;
    timerIdInCountdown = setInterval(function(){
        countInCountdown--;
        updateTextInCountdown(countInCountdown);
    },1000);
}

function countingStopInCountdown(){
    stopBtnInCountdown.style.display = "none";
    startBtnInCountdown.style.display = "block";

    clearInterval(timerIdInCountdown);
    timerIdInCountdown = 0;
}

function countingRestartInCountdown(){
    stopBtnInCountdown.style.display = "none";
    startBtnInCountdown.style.display = "block";

    clearInterval(timerIdInCountdown);
    timerIdInCountdown = 0;
    countInCountdown = 300;
    updateTextInCountdown(countInCountdown);
}