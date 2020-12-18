var cookie_in_use = localStorage.getItem('cookie_in_use');
if (cookie_in_use == null || getCookie(cookie_in_use) == null || JSON.parse(atob(getCookie(cookie_in_use)))['role'] != "Teacher") {
    window.location.href = "../auth.html";
}

$(document).ready(function(){
    $('#logout').click(function(){
        if (confirm("Are you sure you want to log out?")) {
            localStorage.removeItem('cookie_in_use'); 
            window.location.href = "../auth.html";
        }
    });
});

$(document).ready(() => init());

var calendar, calendarReduced;

function init() {
    //This generates our "Next Events" calendar. I'm using a JQUERY plugin called FullCalendar to generate it.
    var calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2020-12-01',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'Final practice delivery',
                start: '2020-12-18'
            },
            {
                title: 'Third mini-test opens',
                start: '2020-12-21T10:30:00',
                end: '2020-12-21T12:30:00'
            },
            {
                title: '2º Partial exam',
                start: '2020-12-24T12:30:00',
                end: '2020-12-24T14:00:00'
            },
            {
                title: 'Ordinary exam',
                start: '2021-01-13T16:30:00',
                end: '2021-01-13T18:30:00'
            }
        ]
    });

    var calendarElred = document.getElementById('calendarRed');
    calendarReduced = new FullCalendar.Calendar(calendarElred, {
        initialView: 'dayGridMonth',
        initialDate: '2020-12-01',
        headerToolbar: {
            left: false,
            center: 'title',
            right: false
        },
        events: [
            {
                title: 'Final practice delivery',
                start: '2020-12-18'
            },
            {
                title: 'Third mini-test opens',
                start: '2020-12-21T10:30:00',
                end: '2020-12-21T12:30:00'
            },
            {
                title: '2º Partial exam',
                start: '2020-12-24T12:30:00',
                end: '2020-12-24T14:00:00'
            },
            {
                title: 'Ordinary exam',
                start: '2021-01-13T16:30:00',
                end: '2021-01-13T18:30:00'
            }
        ]
    });
    calendarReduced.render();


    $("#calendarRed").click(function () {
        var popup_height = window.innerHeight * 0.5;
        var popup_width = window.innerWidth * 0.5;
        $("#calendar").dialog({ autoOpen: false, height: popup_height, width: popup_width, modal: true, position: { my: "top", at: "top", of: "main" } });
        $("#calendar").dialog("open");
        calendar.render();
    });
}
