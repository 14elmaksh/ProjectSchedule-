var currentDay = moment().format("dddd, MMMM, Do");

var CurrentDayElement = document.querySelector("#currentDay");

CurrentDayElement.textContent = currentDay;
console.log(CurrentDayElement);



