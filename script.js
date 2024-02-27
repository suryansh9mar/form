var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var form4 = document.getElementById("form4");
var next1 = document.getElementById("n1");
var next2 = document.getElementById("n2");
var next3 = document.getElementById("n3");
var back1 = document.getElementById("b1");
var back2 = document.getElementById("b2");
var back3 = document.getElementById("b3");
var indicator= document.getElementsByClassName("indicator")[0];
var circle1=document.getElementsByClassName("circle1")[0];
var circle2=document.getElementsByClassName("circle2")[0];
var circle3=document.getElementsByClassName("circle3")[0];
var circle4=document.getElementsByClassName("circle4")[0];


next1.onclick = function () {
    form1.style.left = "-450px";
    form2.style.left = "50px";
    indicator.style.width="33%";
    circle2.style.border="4px solid #4070f4";
    circle2.style.color="#4070f4";

};

next2.onclick = function () {
    form2.style.left = "-450px";
    form3.style.left = "50px";
    indicator.style.width="66%";
    circle2.style.border="4px solid #4070f4";
    circle2.style.color="#4070f4";
    circle3.style.border="4px solid #4070f4";
    circle3.style.color="#4070f4";
};

next3.onclick = function () {
    form3.style.left = "-450px";
    form4.style.left = "50px";
    indicator.style.width="99%";
    circle2.style.border="4px solid #4070f4";
    circle2.style.color="#4070f4";
    circle3.style.border="4px solid #4070f4";
    circle3.style.color="#4070f4";
    circle4.style.border="4px solid #4070f4";
    circle4.style.color="#4070f4";
};

back1.onclick = function () {
    form2.style.left = "4500px";
    form1.style.left = "50px";
    indicator.style.width="10%";
    circle2.style.border="4px solid #eee";
    circle2.style.color="#eee";
    circle3.style.border="4px solid #eee";
    circle3.style.color="#eee";
    circle4.style.border="4px solid #eee";
    circle4.style.color="#eee";
};

back2.onclick = function () {
    form3.style.left = "4500px";
    form2.style.left = "50px";
    indicator.style.width="33%";
    circle3.style.border="4px solid #eee";
    circle3.style.color="#eee";
    circle4.style.border="4px solid #eee";
    circle4.style.color="#eee";
};

back3.onclick = function () {
    form4.style.left = "4500px";
    form3.style.left = "50px";
    indicator.style.width="66%";
    circle4.style.border="4px solid #eee";
    circle4.style.color="#eee";
};


