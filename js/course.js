$(document).ready(function() {
    //First show course
    changeCentral("#course");

    //Changeing of central container
    $(".course_button").click(function() {
        changeCentral("#course");
        showForum();
    });
    $(".participants_button").click(function() {
        changeCentral("#participants");
        showForum();
    });
    $(".forum_button").click(function() {
        changeCentral("#forum");
        showForum();
    });
    $(".groups_button").click(function() {
        changeCentral("#groups");
        showForum();
    });
});

//Function to change central content
function changeCentral(toChange) {
    $(".central").hide();
    $(toChange).show();
}