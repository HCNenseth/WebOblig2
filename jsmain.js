function forandre() { 
    document.getElementById("overskrift").innerHTML = "How to do Kendo!";
}

function tilbake() { 
    document.getElementById("overskrift").innerHTML = "What is Kendo?";
}

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m+ ":" + s + " " + today.toDateString();
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}