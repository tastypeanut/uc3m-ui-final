var editing;
var user;

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
var forum = [{
        title: "Help with topic 1",
        messages: [{
            sender: {
                img: '../images/students/1.jpg',
                fullname: 'Ivan Fernandez'
            },
            date: randomDate(new Date(2012, 0, 1), new Date()),
            message: "I need help"
        }]
    },
    {
        title: "Is this correct?",
        messages: [{
            sender: {
                img: '../images/students/2.jpg',
                fullname: 'Manuel Fernandez'
            },
            date: randomDate(new Date(2012, 0, 1), new Date()),
            message: "Please respond"
        }]
    },
    {
        title: "I dont understand",
        messages: [{
            sender: {
                img: '../images/students/6.jpg',
                fullname: 'Johnatan Hernandez'
            },
            date: randomDate(new Date(2012, 0, 1), new Date()),
            message: "Help help!"
        }]
    },
    {
        title: "This has to be changed",
        messages: [{
            sender: {
                img: '../images/students/7.jpg',
                fullname: 'Fernando Lopez'
            },
            date: randomDate(new Date(2012, 0, 1), new Date()),
            message: "It seriously needs tochange"
        }]
    },
    {
        title: "First post",
        messages: [{
            sender: {
                img: '../images/students/8.jpg',
                fullname: 'Martina Fernandez'
            },
            date: randomDate(new Date(2012, 0, 1), new Date()),
            message: "I need help"
        }]
    }
]
$(document).ready(function() {

    $('#logout').click(function(){
        if (confirm("Are you sure you want to log out?")) {
            localStorage.removeItem('cookie_in_use'); 
            window.location.href = "../auth.html";
        }
    });

    //First show course
    changeCentral(".course");

    //Changeing of central container
    $(".course_button").click(function() {
        changeCentral(".course");
    });
    $(".participants_button").click(function() {
        changeCentral(".participants");
    });
    $(".forum_button").click(function() {
        changeCentral(".forum");
        showForum();
    });
    $(".groups_button").click(function() {
        changeCentral(".groups");
    });
    $(".grades_button").click(function() {
        changeCentral(".grades");
    });

    $(".post").click((event) => {
        console.log($(event.target));
        console.log($(event.target).data("id"));
        showTopic($(event.target).data("id"));
    });
});

//Function to change central content
function changeCentral(toChange) {
    $(".central").hide();
    $(toChange).show();
}

function showForum() {
    var forumm = $("#forum");

    forumm.empty();
    forum.forEach((post) => {
        const markup = `<article class="post" onclick="showTopic('${post.title}')"><ul class="info"><li><h3>` +
            post.title + `</h3>
            </li>
            <li><strong>Messages: </strong> ` + post.messages.length + ` </li>
            <li><strong>Last message: </strong> ` + post.messages[post.messages.length - 1].date +
            ` </li>
            </ul>
        </article>`;
        forumm.append(markup);
    });
}
//We update the grades table
function showTopic(topic) {
    var forumm = $("#forum")
    currentTopic = topic;
    forumm.empty();
    var table = `<h4>${topic}</h4>
    <table>
    <thead>
        <tr>
            <th>
                Profile image
            </th>
            <th>
                Name and Surname
            </th>
            <th>
                Message
            </th>
            <th>
                Date posted
            </th>
        </tr>
    </thead>
    <tbody>`;
    forum.forEach((post) => {
        //If it is the post
        if (post.title === topic) {
            //For each message
            post.messages.forEach((message) => {
                const markup = `<tr>
                    <td><img src="${message.sender.img}" width='50' height='50' class="avatar" alt="avatar" /></td>
                    <td>${message.sender.fullname}</td>
                    <td class="message">${message.message}</td>
                    <td>${message.date.toDateString()}</td>
                </tr>`;
                table += markup;
            });
        }

    });
    table += `
    </tbody>
</table>

<div id="submit-message">
<h3>Submit your message</h3>
<textarea id="textarea-message"></textarea>
<a class="button6 message" id="message-submit" href="javascript:{}">Submit message</a>
</div>`;
    forumm.append(table);

    //submit message
    $("#message-submit").click(() => {
        var textarea = $("#textarea-message");
        forum.forEach((post) => {
            if (post.title === currentTopic) {
                const message = {
                    sender: {
                        img: user && user.img || '',
                        fullname: user && user.fullname || ''
                    },
                    date: new Date(),
                    message: textarea.val()
                };
                post.messages.push(message);

                showTopic(currentTopic);
                textarea.val("");
            }
        });
    });

}

function edit() {
    var select = $('#edit-select').val();
    var title = $('#edit-title').val();
    var markup = `<div class="item-container">
    <img class="icon" src="../images/${select}">
    <a href="#">${title}</a>
</div>`
    $(`#${editing}`).append(markup);
    alert("Added successfully!");
    $(".edit-popup").hide();
}

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
        events: [{
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
        events: [{
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


    $("#calendarRed").click(function() {
        var popup_height = window.innerHeight * 0.5;
        var popup_width = window.innerWidth * 0.5;
        $("#calendar").dialog({ autoOpen: false, height: popup_height, width: popup_width, modal: true, position: { my: "top", at: "top", of: "main" } });
        $("#calendar").dialog("open");
        calendar.render();
    });
}