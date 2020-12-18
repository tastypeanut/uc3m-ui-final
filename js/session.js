function getUser() {
    var cookie_in_use = localStorage.getItem('cookie_in_use');
    if (cookie_in_use != null && getCookie(cookie_in_use) != null) {
        var user = JSON.parse(atob(getCookie(cookie_in_use)));
        return user;
    }
    return null;
}