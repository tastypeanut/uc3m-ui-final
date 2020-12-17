var editing;
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
    $(".grades_button").click(function() {
        changeCentral("#grades");
        showForum();
    });
});

//Function to change central content
function changeCentral(toChange) {
    $(".central").hide();
    $(toChange).show();
}

function edit() {
    var select = $('#edit-select').val();
    var title = $('#edit-title').val();
    var markup = `<div class="item-container">
    <img class="icon" src="../images/${select}">
    <a href="#">${title}</a>
</div>`
    $(`#${editing}`).append(markup);
    $(".edit-popup").hide();
}