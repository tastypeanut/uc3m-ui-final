/*
DESCOMENTAR ESTO CUANDO LA PÁGINA ESTÉ LISTA PARA PRESENTARSE

var cookie_in_use = localStorage.getItem('cookie_in_use');
if (cookie_in_use == null || getCookie(cookie_in_use) == null || JSON.parse(atob(getCookie(cookie_in_use)))['role'] != "Student") {
    window.location.href = "../auth.html";
}*/

var courses = [{
        name: "Mathematics",
        professor: "Mathin Br",
        topics: [{
                name: "topic 1"
            },
            {
                name: "topic 2"
            }
        ]
    },
    {
        name: "Mathematics2",
        professor: "Mathin Br",
        topics: [{
                name: "topic 1"
            },
            {
                name: "topic 2"
            }
        ]
    },
    {
        name: "Mathematics3",
        professor: "Mathin Br",
        topics: [{
                name: "topic 1"
            },
            {
                name: "topic 2"
            }
        ]
    }
];

$(document).ready(() => init());

function init() {}

// function showCourseList() {
//     var center = $("#course-list");
//     console.log(center);
//     center.empty();
//     //Show all rows
//     courses.forEach((course) => {
//         const markup = ``;
//         center.append(markup);
//     });
// }