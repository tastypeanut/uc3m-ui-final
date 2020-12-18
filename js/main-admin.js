var cookie_in_use = localStorage.getItem('cookie_in_use');
if (cookie_in_use == null || getCookie(cookie_in_use) == null || JSON.parse(atob(getCookie(cookie_in_use)))['role'] != "Administrator") {
    window.location.href = "../auth.html";
}

$(document).ready(function(){
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