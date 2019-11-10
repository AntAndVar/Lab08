/* Task5.js - Add your Java Script Code Here */
var monthlist = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var d = new Date();
function date() {
    var p = document.getElementById("mydata");
    p.innerHTML = "Today is " + day[d.getDay()] + ", " + monthlist[d.getMonth()] + " " + d.getDay() + ", " + d.getFullYear(); 
}