$(document).ready(function() {
    //First show course
    changeCentral("#events");

    //Changeing of central container
    $(".buttonHome").click(function() {
        changeCentral("#events");
        showForum();
    });
    $(".students_button").click(function() {
        changeCentral("#students");
        showForum();
    });
    $(".teachers_button").click(function() {
        changeCentral("#teachers");
        showForum();
    });
    $(".courses_button").click(function() {
        changeCentral("#courses");
        showForum();
    });
});

//Function to change central content
function changeCentral(toChange) {
    $(".central").hide();
    $(toChange).show();
}