var start = document.getElementById ("start");
var mario = document.getElementById ("mario");
var luigi = document.getElementById ("luigi");
var brick = document.getElementById ("brick");
function startBtn(){
    if (start.innerHTML === "Start"){
        start.innerHTML = "Pause";
        mario.classList.add('mario');
        luigi.classList.add('luigi');
        brick.classList.add('tool');
    }
    else{
        start.innerHTML = "Start";
        mario.classList.remove('mario');
        luigi.classList.remove('luigi');
        brick.classList.remove('tool');
    }
}
