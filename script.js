console.log(moment().format("dddd, MMMM Do"));

console.log(this)
$(".saveBtn").on('click', function(){
 //get values from row being save
    var value = $(this).siblings(".description").val();
    var key = $(this).parent().attr("id")

    //store to local storage
    localStorage.setItem(key, value);
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
