// Time and Date **PLACED IN HEADER
var dateTime = moment().format('dddd MMMM Do YYYY, h:mm a');
$("#currentDay").append(dateTime);

//FUNCTION TO SET COLOUR CODE!
function timeSlots(){

//current time
var timeNow = moment();
//current time - @ NEAREST HOUR
var roundedHour = timeNow.startOf("hour");

//class time-block is constant in block 1-9
var timeSlotHour = $(".time-block");

//looping through each time block
for (var i =0; i < timeSlotHour.length; i++) {
    var dataHour = (timeSlotHour[i].getAttribute("data-hour"));
    console.log(dataHour);
//if current time has past hour of data-hour value of div
if (moment(roundedHour).isAfter(dataHour)){
// need change colour of div to grey
   // $(".form9").addClass("past");
   //$(".time-block").siblings().addClass("past");
   var siblingsClass = $(timeSlotHour).addClass("past");
   $(siblingsClass).siblings();
}   
    else if (moment(roundedHour).isBefore(dataHour)){
        //$(".form9").addClass("future");
        $(timeSlotHour).siblings().addClass("future");
}
    else if (moment(roundedHour).isSame(dataHour)){
        //$(".form9").addClass("present");
        $(timeSlotHour).siblings().addClass("present");
    }
};
}
timeSlots();

//9am button.
//When i click the save button..
$(".saveBtn9").click(function(){
    //get user input test
    var input9am = $(".form9").val();
    console.log(input9am);
    //set to local storage
    localStorage.setItem("userInput1", input9am);
})
function getLocalItem1() {
    var getUserInput1 = localStorage.getItem("userInput1");
    $(".form9").val(getUserInput1);
}
getLocalItem1();

//10am button.
//When i click the save button..
$(".saveBtn10").click(function(){
    //get user input test
    var input10am = $(".form10").val();
    //set to local storage
    localStorage.setItem("userInput2", input10am);

})

function getLocalItem2() {
    var getUserInput2 = localStorage.getItem("userInput2");
    $(".form10").val(getUserInput2);
}
getLocalItem2();

//11am button.
//When i click the save button..
$(".saveBtn11").click(function(){
    //get user input test
    var input11am = $(".form11").val();
    //set to local storage
    localStorage.setItem("userInput3", input11am);

})

function getLocalItem3() {
    var getUserInput3 = localStorage.getItem("userInput3");
    $(".form11").val(getUserInput3);
}
getLocalItem3();

//12am button.
$(".saveBtn12").click(function(){
    //get user input test
    var input12am = $(".form12").val();
    //set to local storage
    localStorage.setItem("userInput4", input12am);

})

function getLocalItem4() {
    var getUserInput4 = localStorage.getItem("userInput4");
    $(".form12").val(getUserInput4);
}
getLocalItem4();

//1pm
$(".saveBtn1").click(function(){
    //get user input test
    var input1pm = $(".form1").val();
    //set to local storage
    localStorage.setItem("userInput5", input1pm);

})

function getLocalItem5() {
    var getUserInput5 = localStorage.getItem("userInput5");
    $(".form1").val(getUserInput5);
}
getLocalItem5();

//2pm
$(".saveBtn2").click(function(){
    //get user input test
    var input2pm = $(".form2").val();
    //set to local storage
    localStorage.setItem("userInput6", input2pm);

})

function getLocalItem6() {
    var getUserInput6 = localStorage.getItem("userInput6");
    $(".form2").val(getUserInput6);
}
getLocalItem6();

//3pm
$(".saveBtn3").click(function(){
    //get user input test
    var input3pm = $(".form3").val();
    //set to local storage
    localStorage.setItem("userInput7", input3pm);

})

function getLocalItem7() {
    var getUserInput7 = localStorage.getItem("userInput7");
    $(".form3").val(getUserInput7);
}
getLocalItem7();

//4pm
$(".saveBtn4").click(function(){
    //get user input test
    var input4pm = $(".form4").val();
    //set to local storage
    localStorage.setItem("userInput8", input4pm);

})

function getLocalItem8() {
    var getUserInput8 = localStorage.getItem("userInput8");
    $(".form4").val(getUserInput8);
}
getLocalItem8();

//5pm
$(".saveBtn5").click(function(){
    //get user input test
    var input5pm = $(".form5").val();
    //set to local storage
    localStorage.setItem("userInput9", input5pm);

})

function getLocalItem9() {
    var getUserInput9 = localStorage.getItem("userInput9");
    $(".form5").val(getUserInput9);
}
getLocalItem9();