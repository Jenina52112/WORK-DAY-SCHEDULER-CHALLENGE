dayjs.extend(window.dayjs_plugin_customParseFormat)
var currentDay = document.querySelector("#currentDay");
var divHour = document.querySelectorAll("[id = 'hour']");
console.log(divHour)
var hourContainer = document.querySelector(".container-fluid");
var hourChildren  = hourContainer.children
console.log(hourChildren.length)

//This sets the date of the calendar
var today = dayjs().format('dddd' + ', ' + 'MMMM D YYYY')
currentDay.textContent = today

initialTime = [dayjs('9:00 AM','h:mm A'),dayjs('10:00 AM', 'h:mm A'),dayjs('11:00 AM', 'h:mm A'),dayjs('12:00 PM', 'h:mm A'),dayjs('1:00 PM', 'h:mm A'),dayjs('2:00 PM', 'h:mm A'),
dayjs('3:00 PM', 'h:mm A'),dayjs('4:00 PM', 'h:mm A'),dayjs('5:00 PM', 'h:mm A')]
var hourNow  = dayjs().format('hA')

//This sets the colors for past, present and future hours
function redgreenGray(){
for (var i = 0; i < initialTime.length; i++){
  var hourArray =  dayjs(initialTime[i]).format('hA')

var time1 = dayjs()
var time2 = initialTime[i]
var differ = time2.diff(time1, 'h')

if (hourNow === hourArray){
  hourChildren[i].classList.add("present")
}
if (differ < 0){
  hourChildren[i].classList.add("past")
}
if (differ > 0){
  hourChildren[i].classList.add("future")
}

}
}
redgreenGray()


//THIS IS FROM CORDOVA
function saveEl(){
  var value = $(this).siblings(".description").val()
console.log(value)
var hour = $(this).parent().attr("id")
console.log(hour)
localStorage.setItem(hour, value)

}
$(".saveBtn").on("click", saveEl)

// function hourUpdater() {
//   // get current number of hours
//   var currentHour = dayjs().hour();

//   // loop over time blocks
//   $('.time-block').each(function () {
//     var blockHour = parseInt($(this).attr('id').split('-')[1]);
// console.log(blockHour)
//     // check if we've moved past this time
//     if (blockHour < currentHour) {
//       $(this).addClass('past');
//     } else if (blockHour === currentHour) {
//       $(this).removeClass('past');
//       $(this).addClass('present');
//     } else {
//       $(this).removeClass('past');
//       $(this).removeClass('present');
//       $(this).addClass('future');
//     }
//   });
// }
// hourUpdater();

for(var i = 9; i < 18; i++){
  $("#hour-"+i + " .description").val(localStorage.getItem("hour-" + i))
}

//THIS IS FROM CORDOVA




// for(var i = 0; i<buttonEl.length;i++){
  
// buttonEl[i].addEventListener("click", function(event){
//   event.preventDefault()
  
  
//   userInput  = textArea.textContent

//  localStorage.setItem('textarea', JSON.stringify(userInput))

//  var userInput2 = JSON.parse(localStorage.getItem('textarea'))
//  console.log(userInput2)
// })
// }



// var buttonEl = $('.btn')
// buttonEl.on('click', function(e){
// var btnSaved = $(e.currentTarget)
// var userText = btnSaved.prev()[0].value
// console.log(userText)

//   if(localStorage.setItem('text',userText ) == null){
//   localStorage.getItem = ('text','[]')
//   }
//   localStorage.setItem('text', JSON.stringify(userInput))
//   userInput.push(userText)

//   var userInput = JSON.parse(localStorage.getItem('text'))

// });
// function saveText(){
//   if(localStorage.getItem('text') != null){
//       document.getElementsByClassName('description').innerHTML = JSON.parse(localStorage.getItem('text'))
//   }
// }



  function getTextAreaInput() {
    // Get the text area element
    
    
    // Access the input from the text area
     
    // Do something with the text, for example, log it to the console
    
}
//localStorage.setItem("scoreList", JSON.stringify(scoreList));
/* <button onclick="getTextAreaInput()">Get Input</button>
    
    <script>
        function getTextAreaInput() {
            // Get the text area element
            const textArea = document.getElementById('myTextArea');
            
            // Access the input from the text area
            const text = textArea.value;
            
            // Do something with the text, for example, log it to the console
            console.log('Text Area Input:', text);
        } */


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
  