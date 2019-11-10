/* Task3.js - Add your Java Script Code Here */
var sum = 0;
function addcost(add) {
    sum=sum+add;
    var p = document.getElementById("mydata");
    p.innerHTML = "Amount = " + sum;
}