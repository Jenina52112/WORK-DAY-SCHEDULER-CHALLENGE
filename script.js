dayjs.extend(window.dayjs_plugin_customParseFormat)

var currentDay = document.querySelector("#currentDay");
var spanEl = document.querySelectorAll("span");

var divHour = document.querySelectorAll("[id = 'hour']");
console.log(divHour.length)

buttonEl  = document.querySelectorAll("[id = 'buttonEl']")
console.log(buttonEl.length)

textArea = document.querySelectorAll("[id = 'textArea']")
console.log(textArea.length)
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var today = dayjs().format('dddd' + ', ' + 'MMMM D YYYY')
currentDay.textContent = today
var timeNow = dayjs().format('hA')
console.log(timeNow)


//spanEl.textContent = dayjs().format('9A')
// initialTime = [dayjs().hour(0).format('hA'), dayjs().hour(10).format('hA'),dayjs().hour(11).format('hA'),dayjs().hour(12).format('hA'),dayjs().hour(13).format('hA'),
// dayjs().hour(14).format('hA'),dayjs().hour(15).format('hA'),dayjs().hour(16).format('hA'),dayjs().hour(17).format('hA')]
// console.log(initialTime)



initialTime = [dayjs('9:00 AM','hA'),dayjs('10:00 AM', 'h:mm A'),dayjs('11:00 AM', 'h:mm A'),dayjs('12:00 PM', 'h:mm A'),dayjs('1:00 PM', 'h:mm A'),dayjs('2:00 PM', 'h:mm A'),
dayjs('3:00 PM', 'h:mm A'),dayjs('4:00 PM', 'h:mm A'),dayjs('5:00 PM', 'h:mm A')]
console.log(initialTime[0])


// for (var i = 0; i < initialTime.length; i++){
//   spanEl[i].textContent = initialTime[i];
  
// }

time3 = dayjs('11:00 PM', 'h:mm A')

for (var i = 0; i < initialTime.length; i++){
var time1 = dayjs()
var time2 = initialTime[i]
differ = time2.diff(time1, 'hour')

console.log(differ)

if (differ < 0){
  divHour[i].classList.add("past")
}
if (differ > 0){
  divHour[i].classList.add("future")
}
if (differ == 0){
  divHour[i].classList.add("present")
}

}

for (var i = 0; i < buttonEl.length; i++){
  saveBtn1 = buttonEl[i]
  
 
  
} 


  $("button").click(function(){

    for (var i = 0; i < textArea.length; i++){
 
  
      eventText = textArea[i].value
     
       
     } 


    console.log("button clicked")
    localStorage.setItem('events', JSON.stringify(eventText))

    // action goes here!!
  });

 getLocal = JSON.parse(localStorage.getItem('eventText'));
//const isBeforeDefault = currentDate.isBefore(targetDate);
 // Output: true
//dayjs().isBefore(dayjs('2011-01-01'))

// var spanElArray = document.querySelectorAll("[span]");
// for (var i = 0; i < divHour.length; i++) {
//   // Do something with each element (e.g., hide it)
//   //divHour[i].classList.add("present")
 
// }
// for (var i = 0; i < timeText.length; i++) {
//   // Do something with each element (e.g., hide it)
//   //hourDiv[i].classList.add("present")
//   hourText = timeText[i].textContent
//   console.log(hourText)
//   if (hourText > timeNow){
//     divHour[i].classList.add("future")
//   }
//   if (hourText < timeNow){
//     divHour[i].classList.add("past")
//   } 
//   if (hourText === timeNow){
//     divHour[i].classList.add("present")
//   }
//}







// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours of 9am to 5pm
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  