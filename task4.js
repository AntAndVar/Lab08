/* Task4.js - Add your Java Script Code Here */
function rolldie() {
   var numlist = [];
   for (var i = 0; i<6; i++) {
       numlist.push(Math.floor(Math.random() * 6) + 1);
   } 
   var p = document.getElementById("mydata");
   var sum = numlist[0] + numlist[1] + numlist[2] + numlist[3] + numlist[4] + numlist[5];
   sum = sum/3;
   p.innerHTML = numlist[0] + " " + numlist[1] + ", " + numlist[2] + " " + numlist[3] + ", " + numlist[4] + " " + numlist[5] + "\n " + "Average = " + sum;
}