function showTime(){
    var clock = document.getElementById('clock');
    var wish=document.getElementById('wish');
    var dte=document.getElementById('dte');
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var day= date.getDate();
    var interval = "AM";
    var month=["January","February","March","April","May","June","July","August","September","October","November","December"];

    // console.log(date);
    var ctime=hour;
    if(ctime>=12 && ctime <=18)
    {
        wish.innerHTML="Good Afternoon";
    }
    else if(ctime>=18 && ctime <=23)
    {
        wish.innerHTML="Good Evening";
    }
    else{
        wish.innerHTML="Good Morning";
    }
    
    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
        interval = "PM";
    }
    var months=month[date.getDay()];
    var time = hour + ":" + min + ":" + sec + " " + interval;
    clock.innerText = time;
    clock.textContent = time;   
    dte.innerHTML=day + " " + months + " " + date.getFullYear();
    setTimeout(showTime, 1000);
    
}

/*
function clock(){
    var date=new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    console.log(hour);
    document.body.innerHTML(hour + " : " + minute + " : " + second);
}*/