/*
Διαθέσιμα cookies:
var json = {
        username: "Giorgos",
        session_id: "15",
        type: 1
    } ;
*/

function changeNavbar() {
    var type = getCookie('type') ;
    //console.log(type) ;
    //type = 1 ;
    if (type == 1) {
        parent() ;
    } else if (type == 2) {
        provider() ;
    } else if (type == 3) {
        admin() ;
    }
}

function checkIfEnter() {           //for the search
    if(event.keyCode === 13) {      //if enter has been pressed
        text = document.getElementById('searchText').value ;
        //alert("Enter pressed." + "The text up to now is: " + text) ;
        var url = "events.html?freeText=" + text ;
        window.location = url ;
    }
}

function parent() {
    //if(isParent) {
        //Top black bar
        //<a class="nav-link text-white text-right" href="signin.html" style="display: inline;"><small>Όνομα Χρήστη</small></a>
        document.getElementById('topBar').innerHTML =
            '<a class="nav-link text-white text-right" href="parentProfile.html" style="display: inline;"><small>Όνομα</small></a>' ;
        document.getElementById('topBar').innerHTML +=
            '<a class="nav-link text-white text-right" href="parentProfile_points.html" style="display: inline;"><small>Πόντοι</small></a>' ;
        document.getElementById('topBar').innerHTML +=
            '<a class="nav-link text-white text-right" href="index.html?signout=true" style="display: inline;"><small>Αποσύνδεση</small></a>' ;

        //Navigation
        document.getElementById('profile').innerHTML = '<a class="nav-link" href="parentProfile.html"><b>Προφίλ</b></a>' ;
}

function provider() {
    //if(isProvider) {
    //Top black bar
    document.getElementById('topBar').innerHTML =
        '<a class="nav-link text-white text-right" href="providerProfile.html" style="display: inline;"><small>Όνομα</small></a>' ;
    document.getElementById('topBar').innerHTML +=
        '<a class="nav-link text-white text-right" href="signout.html" style="display: inline;"><small>Αποσύνδεση</small></a>' ;
    
    //Navigation
    document.getElementById('profile').innerHTML = '<a class="nav-link" href="providerProfile.html"><b>Προφίλ</b></a>' ;
}

function admin() {
    //if(isAdmin) {
    //Top black bar
    document.getElementById('topBar').innerHTML +=
        '<a class="nav-link text-white text-right" href="signout.html" style="display: inline;"><small>Αποσύνδεση</small></a>' ;
    
    //Navigation
    //document.getElementById('profile').innerHTML = '<a class="nav-link" href="admin_parents.html"><b>Διαχείριση</b></a>' ;
}

