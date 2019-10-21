// Man skapar date objektet med new Date() konstruktor

// Detf finns fyra sät att skapa ett date objekt

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)





var d = new Date();  // centraleuropeisk normaltid

var d = new Date(2018, 11, 24, 10, 33, 30, 0);

console.log(d);

console.log(d.toUTCString());

var d = new Date("2015-03-25"); // Vårat format


let sek1970 = d.getTime(); // millisecond 1970
console.log(sek1970);





/*
getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6)
Date.now()	Get the time. ECMAScript 5.


*/

var t = getTime();


var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


var now = new Date().getMonth(); // Millisecunder sen 1970
console.log(now);

start = new Date("2020-01-01").getTime();
console.log(start);

totaltMilliSec = start - now;

console.log("Millisekunder till start = " +  totaltMilliSec);



