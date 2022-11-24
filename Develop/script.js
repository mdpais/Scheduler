
$(document).ready(readyFn);

function readyFn() {

  // Display today's date in header
  $("#currentDay").text(dayjs().format("dddd, MMMM D YYYY"));

  // Retreive stored data, if any
  var storedEvents = JSON.parse(localStorage.getItem("localEvents"));
  
  // If data does not exist in local storage, create blank array object
  if (storedEvents === null) {
    storedEvents = {
      hour9: "",
      hour10: "",
      hour11: "",
      hour12: "",
      hour13: "",
      hour14: "",
      hour15: "",
      hour16: ""
    };
    storeObject();
  }

  function storeObject() {
    // Store to localStorage
    localStorage.setItem("localEvents", JSON.stringify(storedEvents));
  }
  
  // Display retrieved data in the right fields
  for(var i = 9; i < 17; i++) {
    console.log(storedEvents["hour" + i]);
    $("div#hour-"+i).children("textarea").text(storedEvents["hour" + i]);
  }

  // Save entered text to local storage
  $("button").click(function(){
    var temp = this.parentElement.id.replace( /^\D+/g, '');
    storedEvents["hour" + temp] = $(this).siblings(".description").val();
    storeObject();
  }); 
  
$(function () {


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
}); 
}