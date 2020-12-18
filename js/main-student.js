var cookie_in_use = localStorage.getItem('cookie_in_use');
if (cookie_in_use == null || getCookie(cookie_in_use) == null || JSON.parse(atob(getCookie(cookie_in_use)))['role'] != "Student") {
    window.location.href = "../auth.html";
}

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

