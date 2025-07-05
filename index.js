function sectostr(sec_i_ms){
    let sec_i=sec_i_ms/1000;
    let hr = Math.floor(sec_i / 3600).toString().toString().padStart(2, "0");
    let min = Math.floor((sec_i % 3600) / 60).toString().padStart(2, "0");
    let sec = Math.floor(sec_i % 60).toString().padStart(2, "0"); 

    return `${hr}:${min}:${sec}`;
}

let isRunning=false;
let date_st;
let date2;
let diff=0;
let Id;

function Start(){
    let D=new Date();
    date_st=new Date(D-diff);
    isRunning=true;
    function callback(){
        date2=new Date();
        diff=date2-date_st;
        document.getElementById("time").textContent=sectostr(diff);
    }
    Id=setInterval(callback,100);
}
document.getElementById("Start").onclick=Start;

function Stop(){
    clearTimeout(Id);
}
document.getElementById("Stop").onclick=Stop;

function Reset(){
    clearTimeout(Id);
    isRunning=false;
    date_st=0;
    date2=0;
    diff=0;
    Id=0;
    document.getElementById("time").textContent=sectostr(0);
}
document.getElementById("Reset").onclick=Reset;