//Extracts from the browser's localStorage and checks if cookie_in_use is set, and the cookie it references is valid, 
//if it is it redirects to the main page (meaning the session is already open)
var cookie_in_use = localStorage.getItem('cookie_in_use');
if (cookie_in_use != null && getCookie(cookie_in_use) != null) {
    var cookie_decoded_parsed = JSON.parse(atob(getCookie(cookie_in_use)));
    switch (cookie_decoded_parsed['role']){
        case 'Administrator':
            window.location.href = "main/main-admin.html";
            break;
        case 'Teacher':
            window.location.href = "main/main-teacher.html";
            break;
        case 'Student':
            window.location.href = "main/main-student.html";
            break;
    }
}

$(document).ready(function(){

    //Disables default form behaviour when submitting, and substitutes it for the form_login function
    $("#login_form").submit(function(){
            form_login();
    });

    $("#register_button").click(function(){

            //We remove certain elements we don't want to see,
            //set the behaviour for when the form submits, and the behaviour
            //for when the register button is pressed, as it already has been pressed.


            $(".register_disappear").remove();
            $("#login_form").off("submit");
            $("#register_button").off("click");

            //We define new behaviour for when the form is submitted
            $("#login_form").attr("id", "register_form");
            $("#register_form").submit(function(){
                    form_register();
            });


            //We make some visual changes to the page's header
            $("#form_header").find("img").css("border-right", "2px solid #FFFFFF");
            $("#form_header").find("img").after(atob("PGgyIGNsYXNzPSJjb2wtNiBjb2wtcy02IGNvbC1wLTYiPlJlZ2lzdHJhdGlvbjwvaDI+"));

            //We change the IDs and values for the buttons
            $("#login_button").attr("id", "save_button");
            $("#save_button").attr("value", "Save");

            $("#register_button").attr("id", "delete_button");
            $("#delete_button").attr("value", "Delete");

            //We define a new behaviour for when the delete button is pressed (It restores the form to default values).
            $("#delete_button").click(function(){
                    $("#degree").remove();
                    $("#register_form").trigger("reset");
            });

            //We add new fields to the form, and reorganize old ones
            $("#register_form").prepend(atob("PGgzPkFjY291bnQgSW5mb3JtYXRpb248L2gzPjxicj4=") + atob("PGlucHV0IGlkPSJ1c2VybmFtZV9maWVsZCIgY2xhc3M9ImNvbC0xMiBjb2wtcy0xMiIgdHlwZT0idGV4dCIgbmFtZT0idXNlcm5hbWUiIHBsYWNlaG9sZGVyPSJVc2VybmFtZSIgcmVxdWlyZWQ+") + atob("PGlucHV0IGlkPSJOSUFfZmllbGQiIGNsYXNzPSJjb2wtMTIgY29sLXMtMTIiIHR5cGU9InRleHQiIHBhdHRlcm49IjEwMFswLTldezZ9IiB0aXRsZT0iTklBcyBtdXN0IGJlIGEgOSBkaWdpdCBudW1iZXIgd2l0aCB0aGUgZmlyc3QgdGhyZWUgYmVpbmcgMTAwIiBuYW1lPSJOSUEiIHBsYWNlaG9sZGVyPSJOSUEiIHJlcXVpcmVkPg=="));
            $("#password_field").insertAfter("#NIA_field");
            $("#password_field").after(atob("PGgzPlBlcnNvbmFsIEluZm9ybWF0aW9uPC9oMz48YnI+"));
            $("#email_field").before(atob("PGlucHV0IGlkPSJuYW1lX2ZpZWxkIiBjbGFzcz0iY29sLTEyIGNvbC1zLTEyIiB0eXBlPSJ0ZXh0IiBuYW1lPSJmdWxsX25hbWUiIHBsYWNlaG9sZGVyPSJOYW1lIGFuZCBTdXJuYW1lIiByZXF1aXJlZD4="));

            //We use the datepicker JQUERY widget to guarantee a dd/mm/yyyy format, as this configuration in a normal date input
            //field depends on the browser configuration, and is not controllable by us.
            $("#email_field").after(atob("PGlucHV0IGlkPSJiaXJ0aGRheSIgY2xhc3M9ImNvbC0xMiBjb2wtcy0xMiIgdHlwZT0idGV4dCIgcGF0dGVybj0iXihbMC0yXVswLTldfCgzKVswLTFdKShcLykoKCgwKVswLTldKXwoKDEpWzAtMl0pKShcLylcZHs0fSQiIG5hbWU9ImJpcnRoZGF5IiBwbGFjZWhvbGRlcj0iRGF0ZSBvZiBiaXJ0aCIgdGl0bGU9IkRhdGUgb2YgYmlydGggbXVzdCBiZSBhIHZhbGlkIGRhdGUgYW5kIGJlIGludHJvZHVjZWQgd2l0aCBhIGRheWRheS9tb250aG1vbnRoL3llYXJ5ZWFyeWVhcnllYXIgKGRkL21tL3l5eXkpIGZvcm1hdCIgcmVxdWlyZWQ+"));
            $("#birthday").datepicker({ dateFormat: 'dd/mm/yy', changeMonth: true, changeYear: true, yearRange: "-120:+0"}).val();

            //We continue to add other input fields
            $("#birthday").after(atob("PGlucHV0IGlkPSJJRF9kb2N1bWVudCIgY2xhc3M9ImNvbC0xMiBjb2wtcy0xMiIgdHlwZT0idGV4dCIgbmFtZT0iSUQiIHBsYWNlaG9sZGVyPSJJRCBkb2N1bWVudCIgcmVxdWlyZWQ+"));
            $("#ID_document").after(atob("PHNlbGVjdCBpZD0icm9sZSIgY2xhc3M9ImNvbC0xMiBjb2wtcy0xMiIgbmFtZT0icm9sZSIgcmVxdWlyZWQ+IDxvcHRpb24gdmFsdWU9IiI+LS0gUGxlYXNlIGNob29zZSBhIFJvbGUgLS08L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT0iQWRtaW5pc3RyYXRvciI+QWRtaW5pc3RyYXRvcjwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPSJUZWFjaGVyIj5UZWFjaGVyPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9IlN0dWRlbnQiPlN0dWRlbnQ8L29wdGlvbj4gPC9zZWxlY3Q+"));

            //Detects if role has been selected, and matches "Student". If it does, it displays a new select with the Bachelor Degree options.
            //If student was preeviously selected, and then changed, it deletes the bachelor's Degree selection.
            $("#role").change(function(){
                if(this.value != "Student"){
                    $("#degree").remove();
                }
                if(this.value == "Student"){
                    $("#role").after(atob("PHNlbGVjdCBpZD0iZGVncmVlIiBjbGFzcz0iY29sLTEyIGNvbC1zLTEyIiBuYW1lPSJkZWdyZWUiIHJlcXVpcmVkPiA8b3B0aW9uIHZhbHVlPSIiPi0tIFBsZWFzZSBjaG9vc2UgYSBCYWNoZWxvcidzIERlZ3JlZSAtLTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPSJDb21wdXRlciBTY2llbmNlIGFuZCBFbmdpbmVlcmluZyI+Q29tcHV0ZXIgU2NpZW5jZSBhbmQgRW5naW5lZXJpbmc8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT0iQmlvbWVkaWNhbCBFbmdpbmVlcmluZyI+QmlvbWVkaWNhbCBFbmdpbmVlcmluZzwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPSJUZWxlbWF0aWNzIEVuZ2luZWVyaW5nIj5UZWxlbWF0aWNzIEVuZ2luZWVyaW5nPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9IkJhY2hlbG9yIGluIEVuZ2luZWVyaW5nIFBoeXNpY3MiPkJhY2hlbG9yIGluIEVuZ2luZWVyaW5nIFBoeXNpY3M8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT0iQmFjaGVsb3IgaW4gRW5lcmd5IEVuZ2luZWVyaW5nIj5CYWNoZWxvciBpbiBFbmVyZ3kgRW5naW5lZXJpbmc8L29wdGlvbj4gPC9zZWxlY3Q+"));
                }
            });

            //We add the last few inputs, including the ToU checkbox
            $("#role").after(atob("PGlucHV0IGlkPSJ1bml2ZXJzaXR5IiBjbGFzcz0iY29sLTEyIGNvbC1zLTEyIiB0eXBlPSJ0ZXh0IiBuYW1lPSJ1bml2ZXJzaXR5IiB2YWx1ZT0iQ2hhcmxlcyBJSUkgVW5pdmVyc2l0eSBvZiBNYWRyaWQiIHJlYWRvbmx5Pg=="));
            $("#university").after(atob("PHNlbGVjdCBpZD0ibGFuZ3VhZ2UiIGNsYXNzPSJjb2wtMTIgY29sLXMtMTIiIG5hbWU9Imxhbmd1YWdlIiByZXF1aXJlZD4gPG9wdGlvbiB2YWx1ZT0iYXV0byI+LS0gTGFuZ3VhZ2UgLS08L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT0iRW5nbGlzaCI+RW5nbGlzaDwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPSJTcGFuaXNoIj5TcGFuaXNoPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9Ikl0YWxpYW4iPkl0YWxpYW48L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT0iRnJlbmNoIj5GcmVuY2g8L29wdGlvbj4gPC9zZWxlY3Q+"));
            $("#language").after(atob("PGxhYmVsIGNsYXNzPSJjb2wtMTIgY29sLXMtMTIgY29sLXAtMTIiIGZvcj0iVG9VIiBzdHlsZT0iZm9udC1zaXplOiA5MCU7Ij48aW5wdXQgaWQ9IlRvVSIgdHlwZT0iY2hlY2tib3giIG5hbWU9IlRvVSIgdmFsdWU9InRydWUiIHJlcXVpcmVkPSIiPkkgaGF2ZSByZWFkIGFuZCBhY2NlcHQgdGhlIFRlcm1zIG9mIFVzZTwvbGFiZWw+PC9kaXY+"));
    });
});


/*
When the user logs in, or registers, we use a JQUERY plugin called jquery.serializejson.js to
grab the form data, convert it into a JSON object, and then, depending on the usecase, use it to
compare it to stored cookie values [Loging In], like when we log in, or stringify it, encode it in base64, and 
set it as the value of our user cookie [Registering].

When we Log In, we not only check that the email is registered in our "cookie database", but also
that the password provided is correct. A fun thing that we could implement is encrypting our user cookie with
the password, so that we can only decrypt it and read the data when we have the password. This could
make a fun "Secret Notes App" for example, where we save our notes in the encrypted contents of the cookie.
*/


function form_login(){
    event.preventDefault();
    var obj = $('#login_form').serializeJSON();
    var cookie_value = getCookie(obj['email']);
    if(cookie_value == null){
        alert("The email " + obj['email'] + " is not registered.");
    } else if(cookie_value != null){
        var cookie_decoded_parsed = JSON.parse(atob(cookie_value));
        if(cookie_decoded_parsed['password'] == obj['password']){
            localStorage.setItem('cookie_in_use', obj['email']);
            switch (cookie_decoded_parsed['role']){
                case 'Administrator':
                    window.location.href = "main/main-admin.html";
                    break;
                case 'Teacher':
                    window.location.href = "main/main-teacher.html";
                    break;
                case 'Student':
                    window.location.href = "main/main-student.html";
                    break;
            }
        } else if(cookie_decoded_parsed['password'] != obj['password']){
            alert("Incorrect password");
        }
    }
}

/*
When we register, apart from all the HTML input validation, we make sure the email is not already
registered.
*/

function form_register(){
    event.preventDefault();
    var obj = $('#register_form').serializeJSON();
    var value = btoa(JSON.stringify(obj));
    if(getCookie(obj['email']) == null){
        setCookie(obj['email'], value, 100);
        localStorage.setItem('cookie_in_use', obj['email']);
        switch (obj['role']){ /*This isn't the best way to do this, but it is the quickest. The propper way would be to get the recently stored cookie, and check the role value with that*/
            case 'Administrator':
                window.location.href = "main/main-admin.html";
                break;
            case 'Teacher':
                window.location.href = "main/main-teacher.html";
                break;
            case 'Student':
                window.location.href = "main/main-student.html";
                break;
        }
    } else {
        alert("The email " + obj['email'] + " is already registered. Please choose a new one.");
    }
}

/*In both cases, if the login or the registration is successful, we set the local storage 
variable cookie_in_use to the id (email) of the cookie we are using. This constitutes our "Open Session"
*/
