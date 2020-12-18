function getUser() {
    var cookie_in_use = localStorage.getItem('cookie_in_use');
    if (cookie_in_use != null && getCookie(cookie_in_use) != null) {
        var user = JSON.parse(atob(getCookie(cookie_in_use)));
        return user;
    }
    return null;
}


function goHome() {
    if (getUser()['role'] === 'Student') {
        window.location.href = '../main/main-student.html';
    }
    if (getUser()['role'] === 'Teacher') {
        window.location.href = '../main/main-teacher.html';
    }
    if (getUser()['role'] === 'Administrator') {
        window.location.href = '../main/main-admin.html';
    }
}