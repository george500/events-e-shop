(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
      }
    
})(window, document, undefined);

function searchStats() {
    var sessionID = getCookie("session_id") ;
    var form_data = {
        session_id:sessionID
    } ;

    var fromDate = new Date(document.getElementById("fromDate").value).getTime() / 1000 ;
    var toDate = new Date(document.getElementById("toDate").value).getTime() / 1000 ;
    var fromAge = parseInt(document.getElementById("fromAge").value) ;
    var toAge = parseInt(document.getElementById("toAge").value) ;
    var type = document.getElementById("type").value ;
    //console.log(fromDate) ;
    //console.log(toDate) ;
    //console.log(fromAge) ;
    //console.log(toAge) ;
    //console.log(type) ;
    if (isNaN(fromDate) || isNaN(toDate) || isNaN(fromAge) || isNaN(toAge)) {
        alert("Παρακαλώ συμπληρώστε όλα τα πεδία.") ;
        return ;
    }
    form_data.fromDate = fromDate ;
    form_data.toDate = toDate ;
    form_data.fromAge = fromAge ;
    form_data.toAge = toAge ;
    form_data.toAge = type ;
    //console.log(form_data) ;
    if (fromDate > toDate) {
        alert("Σφάλμα, τελική ημερομηνία προγενέστερη από την αρχική.") ;
        return ;
    }
    if (fromAge > toAge) {
        alert("Σφάλμα, αρνητικό διάστημα ηλικιών.") ;
        return ;
    }
    var results ;
    /*
    $.ajax({
        url: '/searchProviderStats',
        type: 'POST',
        data: form_data,
        cache: false,
        success: function(data){
            var data = JSON.parse(returnjson) ;
            if (data.success) {
            displayStats(data) ;
        }
    });*/
    /*$.post("/searchProviderStats", form_data,
        function(returnjson, status){
            var data = JSON.parse(returnjson) ;
            if (data.success) {
                displayStats(data) ;
            }
    }) ;*/
    var results = {
        success: true,
        tickets: 5000
    } ;
    displayStats(results) ;
    /*
    success: true αν επιστρέφονται τα τιμολόγια, false διαφορετικά
    tickets: ο αριθμός των πβληθέντων εισιτηρίων
    */
}

function displayStats(results) {
    if(results.success) {
        document.getElementById("results").innerHTML = "<b>Εισητήρια που έχουν πουληθεί: " + results.tickets + "</b>" ;
    }
    else {
        alert("Υπήρξε κάποιο πρόβλημα.") ;
    }
}