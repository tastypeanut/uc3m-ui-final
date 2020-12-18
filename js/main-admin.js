var cookie_in_use = localStorage.getItem('cookie_in_use');
if (cookie_in_use == null || getCookie(cookie_in_use) == null || JSON.parse(atob(getCookie(cookie_in_use)))['role'] != "Administrator") {
   window.location.href = "../auth.html";
}

$(document).ready(function() {
    //First show course
    changeCentral("#events");

    //Changeing of central container
    $(".buttonHome").click(function() {
        changeCentral("#events");
    });
    $(".students_button").click(function() {
        changeCentral("#students");
    });
    $(".teachers_button").click(function() {
        changeCentral("#teachers");
    });
    $(".courses_button").click(function() {
        changeCentral("#courses");
    });
});

//Function to change central content
function changeCentral(toChange) {
    $(".central").hide();
    $(toChange).show();
}

function createCourse() {
    var title = $('#edit-title').val();
    var prof = $('#edit-proffessor').val();
    var markup = `<article class='course-card'>
    <h4 class="course-name">${title}</h4>
    <div class="course-info">
        <h5 class="professor" style="flex-grow: 1;">Professor: ${prof}</h5>
        <a class="buttonEdit" href="#" onclick="$( '.add-teacher-popup').show();">+ teacher</a>
        <a class="buttonEdit" href="#" onclick="$( '.add-student-popup').show();">+ student</a>
    </div>
</article>`
    $(`#courses`).append(markup);
    alert("Added successfully!");
    $(".create-course-popup").hide();
}