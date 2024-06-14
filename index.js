let seconds = 00;
let minutes = 00;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.minutes');
let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');
let btnReset = document.querySelector('.reset');
let interval;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    inverval = setInterval(startTimer, 10);
})
btnStop.addEventListener('click', () => {
    clearInterval(inverval);
})
btnReset.addEventListener('click', () => {
    clearInterval(inverval);
    minutes = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = minutes;
})

function startTimer(){
    minutes++;
    if(minutes <= 9){
        getTens.innerHTML = '0' + minutes;
    }
    if(minutes > 9){
        getTens.innerHTML = minutes;
    }
    if(minutes > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        minutes = 0;
        getTens.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
}