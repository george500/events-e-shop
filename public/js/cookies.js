//https://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

function deleteAllCookies() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "session_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "type=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

}

//displayCookies() ;
function displayCookies() {
    console.log("Hello, listing cookies:") ;
    console.log(getCookie("username")) ;
    console.log(getCookie("session_id")) ;
    console.log(getCookie("type")) ;     //0 for parent, 1 for provider, 2 for admin
} ;
/*
function signedin() {
    setCookie("username", "giorgos") ;
    setCookie("session_id", "15") ;
    setCookie("type", "1") ;
} ;
*/