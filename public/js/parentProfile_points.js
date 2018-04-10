(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
        loadPoints() ;
      }
    
})(window, document, undefined);

function loadPoints() {
    var sessionID = getCookie("session_id") ;
    var results ;
    /*var form_data = {session_id:sessionID} ;
    $.ajax({
        url: '/getParentPoints',
        type: 'POST',
        data: form_data,
        cache: false,
        success: function(returnjson){
            var data = JSON.parse(returnjson) ;
            if (data.success) {
                displayInfo(results) ;
        }
    });*/
    /*$.post("/getParentPoints", {session_id:sessionID},
        function(returnjson, status){
            var data = JSON.parse(returnjson) ;
            if (data.success) {
                displayInfo(results) ;
            }
    }) ;*/
    results = {
        success: true,
        points : 500
    }
    displayInfo(results) ;
}

function displayInfo(results) {
    if (results.success) {
        document.getElementById('points').innerHTML = results.points + " πόντοι" ;
    }
    else {
        alert("Υπήρξε κάποιο πρόβλημα.")
    }
}

function buyPoints() {
    var points ;
    points = parseFloat(document.getElementById('pointsToBuy').value) ;
    var sessionID = getCookie("session_id") ;
    var results ;
    /*var form_data = {session_id:sessionID, points: points} ;
    $.ajax({
        url: '/buyPoints',
        type: 'POST',
        data: form_data,
        cache: false,
        success: function(returnjson){
            if (data.success) {
            displayInfo(results) ;
        }
    });*/
    /*$.post("/buyPoints", {session_id:sessionID, points: points},
        function(data, status){
            if (data.success) {
                displayInfo(results) ;
            }
    }) ;*/
    results = {
        success: true,
        newPoints:550
    }
    /*
    success: εάν η αγορά ήταν επιτυχής
    newPoints: το νέο υπόλοιπο των πόντων,
        να μην ξεχάσετε: Με κάθε αγορά
        άνω των 100 ευρώ παίρνετε δωρεάν
        5 επιπλέον πόντους.
    */
    pointsBought(results) ;
}

function pointsBought(results) {
    if (results.success) {
        document.getElementById('pointsText').innerHTML = "Το νέο μου υπόλοιπο:";
        document.getElementById('points').innerHTML = results.newPoints + " πόντοι" ;
    }
    else {
        alert("Υπήρξε κάποιο πρόβλημα και η αγορά των πόντων δεν ολοκληρώθηκε.")
    }
}

function calculateCost() {
    var points ;
    points = parseFloat(document.getElementById('pointsToBuy').value) ;
    var cost = points ;
    document.getElementById('cost').innerHTML = cost ;
}