// declare varibles

//console.log(moment().format("dddd, MMMM Do"));
$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    console.log(this)
        $(".saveBtn").on('click', function(){
    //get values from row being save
    var value = $(this).siblings(".description").val();
    var key = $(this).parent().attr("id")

    //store to local storage
    localStorage.setItem(key, value);
});
});



$("#hour-9 .description").val(localStorage.getItem("hour-9"))

$("#hour-10 .description").val(localStorage.getItem("hour-10"))

$("#hour-11 .description").val(localStorage.getItem("hour-11"))

$("#hour-12 .description").val(localStorage.getItem("hour-12"))

$("#hour-13 .description").val(localStorage.getItem("hour-13"))

$("#hour-14 .description").val(localStorage.getItem("hour-14"))

$("#hour-15 .description").val(localStorage.getItem("hour-15"))

$("#hour-16 .description").val(localStorage.getItem("hour-16"))

$("#hour-17 .description").val(localStorage.getItem("hour-17"))

$("#hour-18 .description").val(localStorage.getItem("hour-18"))

$("#hour-19 .description").val(localStorage.getItem("hour-19"))

$("#hour-20 .description").val(localStorage.getItem("hour-20"))

$("#hour-21 .description").val(localStorage.getItem("hour-21"))


function hourTracker () {
    var currentHour = moment().hour();

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour, currentHour)
    
        // determines whether user has passed the time slot
        if(blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
})

}
hourTracker ();
