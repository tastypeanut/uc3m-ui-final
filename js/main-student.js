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

function init() {
    showCourseList();
}

function showCourseList() {
    var center = $("#course-list");
    console.log(center);
    center.empty();
    //Show all rows
    courses.forEach((course) => {
        const markup = `<article class='course-card'>
            <h4 class="course-name">${course.name}</h4>
            <div class="course-info">
                <h5 class="professor">Professor: ${course.professor}</h5>
                <div class="topics">Topics: ${course.topics.length}</div>
            </div>
            <a href="#" class="go-to-course">
                <p>\u25B6</p>
            </a>
        </article>`;
        center.append(markup);
    });
}