
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
    $("div#hour-"+i).children("textarea").text(storedEvents["hour" + i]);
  }

  // Save entered text to local storage
  $("button").click(function(){
    var temp = this.parentElement.id.replace( /^\D+/g, "");
    storedEvents["hour" + temp] = $(this).siblings(".description").val();
    storeObject();
  }); 
  
  console.log(dayjs().format('H'));
  for(j = 9; j < 17; j++) {
    $("div#hour-"+j).removeClass("past");
    $("div#hour-"+j).removeClass("present");
    $("div#hour-"+j).removeClass("future");
    if(j > dayjs().format('H')) {
      $("div#hour-"+j).addClass("future");
    }
    else if(j = dayjs().format('H')) {
      $("div#hour-"+j).addClass("present");
    }
    else if(j = dayjs().format('H')) {
      $("div#hour-"+j).addClass("future");
    }
    else {
      console.log("Error");
    }
  }

}