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
        url: '/getParentInfo',
        type: 'POST',
        data: form_data,
        cache: false,
        success: function(returnjson){
            var data = JSON.parse(returnjson) ;
            if (data.success) {
            displayInfo(results) ;
        }
    });*/
    /*$.post("/getParentInfo", {session_id:sessionID},
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
        cardNo : "13645832364172",
        cardExp : "10/2019"
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
    cardNo: ο αριθμός της κάρτας
    cardCode: ο κωδικός της κάρτας
    cardExp: η ημερομηνία λήξης της κάρτας
    */
}

function changeNameConfirm() {
    var sessionID = getCookie("session_id") ;
    var newName = document.getElementById('name').value ;
    if (newName.length == 0) {
        alert("Name is empty.") ;
    }
    $.post("/parentChangeName", {session_id : sessionID, name : newName},
        function(data, status){
            //console.log(data) ;
            if (data.success) {
                document.getElementById("currentName").innerHTML = data.newValue ;
            } else {
                alert("Υπήρξε πρόβλημα, η τιμή του πεδίου δεν άλλαξε.") ;
            }
    }) ;
}
function changeSurnameConfirm() {
    var sessionID = getCookie("session_id") ;
    var newSurname = document.getElementById('surname').value ;
    $.post("/parentChangeSurname", {session_id : sessionID, surname : newSurname},
        function(data, status){
            if (data.success) {
                document.getElementById("currentSurname").innerHTML = data.newValue ;
            } else {
                alert("Υπήρξε πρόβλημα, η τιμή του πεδίου δεν άλλαξε.") ;
            }
    }) ;
}
function changeTelConfirm() {
    var sessionID = getCookie("session_id") ;
    var newTel = document.getElementById('tel').value ;
    $.post("/parentChangeTel", {session_id : sessionID, tel : newTel},
        function(data, status){
            if (data.success) {
                document.getElementById("currentTel").innerHTML = data.newValue ;
            } else {
                alert("Υπήρξε πρόβλημα, η τιμή του πεδίου δεν άλλαξε.") ;
            }
    }) ;
}
function changeEmailConfirm() {
    var sessionID = getCookie("session_id") ;
    var newEmail = document.getElementById('email').value ;
    $.post("/parentChangeEmail", {session_id : sessionID, email : newEmail},
        function(data, status){
            if (data.success) {
                document.getElementById("currentEmail").innerHTML = data.newValue ;
            } else {
                alert("Υπήρξε πρόβλημα, η τιμή του πεδίου δεν άλλαξε.") ;
            }
    }) ;
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
    $.post("/parentChangePass", {session_id : sessionID, password : newPass},
        function(data, status){
            if (data.success) {
                alert("Ο κωδικός άλλαξε με επιτυχία.") ;
                //document.getElementById("currentName").innerHTML = data.newValue ;
            } else {
                alert("Υπήρξε πρόβλημα, η τιμή του κωδικού δεν άλλαξε.") ;
            }
    }) ;
}
function changePCConfirm() {
    var sessionID = getCookie("session_id") ;
    var newPC = document.getElementById('PC').value ;
    $.post("/parentChangePC", {session_id : sessionID, pc : newPC},
        function(data, status){
            if (data.success) {
                document.getElementById("currentPC").innerHTML = data.newValue ;
            } else {
                alert("Υπήρξε πρόβλημα, η τιμή του πεδίου δεν άλλαξε.") ;
            }
    }) ;
}
function changeCityConfirm() {
    var sessionID = getCookie("session_id") ;
    var newCity = document.getElementById('city').value ;
    $.post("/parentChangeCity", {session_id : sessionID, city : newCity},
        function(data, status){
            if (data.success) {
                document.getElementById("currentCity").innerHTML = data.newValue ;
            } else {
                alert("Υπήρξε πρόβλημα, η τιμή του πεδίου δεν άλλαξε.") ;
            }
    }) ;
}
function changeRoadConfirm() {
    var sessionID = getCookie("session_id") ;
    var newRoad = document.getElementById('road').value ;
    $.post("/parentChangeRoad", {session_id : sessionID, road : newRoad},
        function(data, status){
            if (data.success) {
                document.getElementById("currentRoad").innerHTML = data.newValue ;
            } else {
                alert("Υπήρξε πρόβλημα, η τιμή του πεδίου δεν άλλαξε.") ;
            }
    }) ;
}
function changeNoConfirm() {
    var sessionID = getCookie("session_id") ;
    var newNo = document.getElementById('no').value ;
    $.post("/parentChangeNo", {session_id : sessionID, no : newNo},
        function(data, status){
            if (data.success) {
                document.getElementById("currentNo").innerHTML = data.newValue ;
            } else {
                alert("Υπήρξε πρόβλημα, η τιμή του πεδίου δεν άλλαξε.") ;
            }
    }) ;
}
function changeCardConfirm() {
    var sessionID = getCookie("session_id") ;
    var newCardNo = document.getElementById('cardNo').value ;
    var newCardCode = document.getElementById('cardCode').value ;
    var newCardExp = new Date(document.getElementById('cardExp').value).getTime() / 1000 ;
    //console.log(newCardNo,newCardCode,newCardExp) ;
    if (!newCardNo || !newCardCode || !newCardExp) {
        alert("Όλα τα πεδία είναι απαραίτητα.") ;
        return ;
    }
    $.post("/parentChangeCard", 
    {session_id : sessionID, cardNo : newCardNo,
        cardCode : newCardCode, cardExp : newCardExp},
        function(data, status){
            if (data.success) {
                document.getElementById('currentCardNo').innerHTML = data.cardNo ;
                document.getElementById('currentCardExp').innerHTML = data.cardExp ;
            } else {
                alert("Υπήρξε πρόβλημα, η τιμή του πεδίου δεν άλλαξε.") ;
            }
    }) ;
}

function displayInfo(results) {
    document.getElementById('currentName').innerHTML = results.name ;
    document.getElementById('currentSurname').innerHTML = results.surname ;
    document.getElementById('currentTel').innerHTML = results.tel ;
    document.getElementById('currentEmail').innerHTML = results.email ;
    document.getElementById('currentPC').innerHTML = results.pc ;
    document.getElementById('currentCity').innerHTML = results.city ;
    document.getElementById('currentRoad').innerHTML = results.road ;
    document.getElementById('currentCardNo').innerHTML = results.cardNo ;
    document.getElementById('currentCardExp').innerHTML = results.cardExp ;
}

function changeName() {
    document.getElementById('newName').style.display = 'initial' ;
    document.getElementById('newNameConfirm').style.display = 'initial' ;
}
function changeSurname() {
    document.getElementById('newSurname').style.display = 'initial' ;
    document.getElementById('newSurnameConfirm').style.display = 'initial' ;
}
function changeTel() {
    document.getElementById('newTel').style.display = 'initial' ;
    document.getElementById('newTelConfirm').style.display = 'initial' ;
}
function changeEmail() {
    document.getElementById('newEmail').style.display = 'initial' ;
    document.getElementById('newEmailConfirm').style.display = 'initial' ;
}
function changePass() {
    document.getElementById('newPass').style.display = 'initial' ;
    document.getElementById('newPass2').style.display = 'initial' ;
    document.getElementById('newPassConfirm').style.display = 'initial' ;
}
function changePC() {
    document.getElementById('newPC').style.display = 'initial' ;
    document.getElementById('newPCConfirm').style.display = 'initial' ;
}
function changeCity() {
    document.getElementById('newCity').style.display = 'initial' ;
    document.getElementById('newCityConfirm').style.display = 'initial' ;
}
function changeRoad() {
    document.getElementById('newRoad').style.display = 'initial' ;
    document.getElementById('newRoadConfirm').style.display = 'initial' ;
}
function changeNo() {
    document.getElementById('newNo').style.display = 'initial' ;
    document.getElementById('newNoConfirm').style.display = 'initial' ;
}
function changeCard() {
    document.getElementById('cardFields').style.display = 'initial' ;
}