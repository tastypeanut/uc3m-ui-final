$(document).ready(function(){
    $('#logout').click(function(){
        if (confirm("Are you sure you want to log out?")) {
            localStorage.removeItem('cookie_in_use'); 
            window.location.href = "../auth.html";
        }
    });
    $("#gradesTable").ready(function(){
        $("[id*='gradesTable']").each(function() {
            if (this.getElementsByClassName("button-default").length < 3) {
                exportGenerator(this.getAttribute('id'))
            }
        });
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

//This generates the table export options for wichever table's ID we pass as a parameter.
function exportGenerator(table_id) {
    TableExport(document.getElementById(table_id), {
        headers: true, // (Boolean), display table headers (th or td elements) in the <thead>, (default: true)
        footers: true, // (Boolean), display table footers (th or td elements) in the <tfoot>, (default: false)
        formats: ["xlsx", "csv", "txt"], // (String[]), filetype(s) for the export, (default: ['xlsx', 'csv', 'txt'])
        filename: "id", // (id, String), filename for the downloaded file, (default: 'id')
        bootstrap: false, // (Boolean), style buttons using bootstrap, (default: true)
        exportButtons: true, // (Boolean), automatically generate the built-in export buttons for each of the specified formats (default: true)
        position: "bottom", // (top, bottom), position of the caption element relative to table, (default: 'bottom')
        ignoreRows: null, // (Number, Number[]), row indices to exclude from the exported file(s) (default: null)
        ignoreCols: null, // (Number, Number[]), column indices to exclude from the exported file(s) (default: null)
        trimWhitespace: true, // (Boolean), remove all leading/trailing newlines, spaces, and tabs from cell text in the exported file(s) (default: false)
        RTL: false, // (Boolean), set direction of the worksheet to right-to-left (default: false)
        sheetname: "id" // (id, String), sheet name for the exported spreadsheet, (default: 'id')
    });
}