dayjs.extend(window.dayjs_plugin_customParseFormat)
var currentDay = document.querySelector("#currentDay");
var divHour = document.querySelectorAll("[id = 'hour']");
//console.log(divHour)
var hourContainer = document.querySelector(".container-fluid");
var hourChildren  = hourContainer.children
//console.log(hourChildren.length)

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

//This sets the textarea content to local storage
  function getTextAreaInput() {
    var value = $(this).siblings(".description").val()
    console.log(value)
    var hour = $(this).parent().attr("id")
    console.log(hour)
    localStorage.setItem(hour, value)
    }
  
  $(".saveBtn").on("click", getTextAreaInput)
  
  for(var i = 9; i < 18; i++){
    $("#hour-"+ i + " .description").val(localStorage.getItem("hour-" + i))
}
