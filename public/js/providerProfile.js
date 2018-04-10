(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
        loadProfileInfo() ;
      }
    
})(window, document, undefined);

function loadProfileInfo() {
    //kati tha ginetai me ta cookies
    var sessionID = getCookie("session_id") ;
    var results ;
    /*var form_data = {session_id:sessionID} ;
    $.ajax({
        url: '/getProviderInfo',
        type: 'POST',
        data: form_data,
        cache: false,
        success: function(returnjson){
            var data = JSON.parse(returnjson) ;
            if (data.success) {
            displayInfo(results) ;
        }
    });*/
    /*$.post("/getProviderInfo", {session_id:sessionID},
        function(returnjson, status){
            var data = JSON.parse(returnjson) ;
            if (data.success) {
                displayInfo(results) ;
            }
    }) ;*/
    results = {
        name : "Giorgos",
        surname : "Papadodimas",
        tel : "2109659854",
        email : "george@gmail.com",
        pc : "15451",
        city : "Αθήνα",
        road : "Πανεπιστημίου",
        no : "23",
        afm: "14328593758",
        businessName: "Ειδικές εκδηλώσεις Α.Ε."
    }
    displayInfo(results) ;
    /*
    name: το όνομα του χρήστη
    surname: το επίθετο του χρήστη
    tel: το τηλέφωνο
    email: το email
    pc: ο ταχυδρομικός κώδικας
    city: η πόλη
    road: ο δρόμος
    no: ο αριθμός του δρόμου
    afm: ο ΑΦΜ της εταιρίας
    businessName: η επωνυμία της εταιρίας
    */
}

function displayInfo(results) {
    document.getElementById('currentName').innerHTML = results.name ;
    document.getElementById('currentSurname').innerHTML = results.surname ;
    document.getElementById('currentTel').innerHTML = results.tel ;
    document.getElementById('currentEmail').innerHTML = results.email ;
    document.getElementById('currentPC').innerHTML = results.pc ;
    document.getElementById('currentCity').innerHTML = results.city ;
    document.getElementById('currentRoad').innerHTML = results.road ;
    document.getElementById('currentNo').innerHTML = results.no ;
    document.getElementById('currentAfm').innerHTML = results.afm ;
    document.getElementById('currentNaming').innerHTML = results.businessName ;
}

function changePassConfirm() {
    var sessionID = getCookie("session_id") ;
    var newPass = document.getElementById('pass').value ;
    var newPass2 = document.getElementById('pass2').value ;
    if (newPass.length < 8) {
        alert("Ο κωδικός δεν θα πρέπει να είναι μικρότερος από 8 χαρακτήρες.") ;
        return ;
    }
    if (newPass != newPass2) {
        alert("Οι κωδικοί δεν ταιριάζουν.") ;
        return ;
    }
    $.post("/providerChangePass", {session_id : sessionID, password : newPass},
        function(data, status){
            if (data.success) {
                alert("Ο κωδικός άλλαξε με επιτυχία.") ;
                //document.getElementById("currentName").innerHTML = data.newValue ;
            } else {
                alert("Υπήρξε πρόβλημα, η τιμή του κωδικού δεν άλλαξε.") ;
            }
    }) ;
}
function changeIBANConfirm() {
    var sessionID = getCookie("session_id") ;
    var newIBAN = document.getElementById('IBAN').value ;
    $.post("/providerChangeIBAN", {session_id : sessionID, IBAN : newIBAN},
        function(data, status){
            if (data.success) {
                document.getElementById("currentIBAN").innerHTML = data.newValue ;
            } else {
                alert("Υπήρξε πρόβλημα, η τιμή του πεδίου IBAN δεν άλλαξε.") ;
            }
    }) ;
}

function changePass() {
    document.getElementById('newPass').style.display = 'initial' ;
    document.getElementById('newPass2').style.display = 'initial' ;
    document.getElementById('newPassConfirm').style.display = 'initial' ;
}

function changeIBAN() {
    document.getElementById('newIBAN').style.display = 'initial' ;
    document.getElementById('newIBANConfirm').style.display = 'initial' ;
}