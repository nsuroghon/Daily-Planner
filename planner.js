// Time and Date **PLACED IN HEADER
var dateTime = moment().format('dddd MMMM Do YYYY, h:mm a');
$("#currentDay").append(dateTime);


function timeSlots(){

//current time
var timeNow = moment();
//current time - @ NEAREST HOUR
var roundedHour = timeNow.startOf("hour");
console.log(roundedHour);


//class time-block is constant in block 1-9
var timeSlotHour = $(".time-block");
// when you log this var you see blocks 1-9
console.log(timeSlotHour);

//looping through each time block
for (var i =0; i < timeSlotHour.length; i++) {
    var dataHour = (timeSlotHour[i].getAttribute("data-hour"));
    console.log(dataHour);
//if current time has past hour of data-hour value of div
if (moment(roundedHour).isAfter(dataHour)){
// need change colour of div to grey
   // $(".form9").addClass("past");
   $(".time-block").siblings().addClass("past");
}   
    else if (moment(roundedHour).isBefore(dataHour)){
        //$(".form9").addClass("future");
        $(".time-block").siblings().addClass("future");
}
    else if (moment(roundedHour).isSame(dataHour)){
        //$(".form9").addClass("present");
        $(".time-block").siblings().addClass("present");
    }
};
}
timeSlots();

//Saving plan to local storage
//When i click the save button..
$(".saveBtn9").click(function(){
    //get user input test
    var input9am = $(".form9").val();
    console.log(input9am);
    //set to local storage
    localStorage.setItem("userInput", input9am);

})

function getLocalItem() {
    var getUserInput = localStorage.getItem("userInput");
    $(".form9").val(getUserInput);
}
getLocalItem();

//1. Add an id to the buttons in the form of "save-hour" where hour is the number of the hour for the button.
// 2. Do the same thing for each text box in the html like "text-hour"...
// 3. in your event handler, get the id of the button that was clicked  with event.target.id
// 4. take that id and trim off just the number portion (split on "-")
// 5. use that number to get the value out of the text to be saved
// 6. save the value to the localstorage with the number as the key.
// That handle saving a note to a specific hour. Each hour will have it's own entry in localStorage.
// To handle populating the values on refresh, add code that does the following tot he base level of your javascript so it runs when the page gets loaded:
// 1. In a for loop, loop from your beginning hour to the end hour.
// 2. in the loop, get the value for that number out of localStorage
// 3. then, make the value of the corresponding text box equal to the value you got out of local storage.
// That will complete those portions of the assignment
