(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
        loadReports() ;
      }
    
})(window, document, undefined);

function loadReports() {
    //kati tha ginetai me ta cookies
    var sessionID = getCookie("session_id") ;
    var results ;
    /*var form_data = {session_id:sessionID} ;
    $.ajax({
        url: '/getProviderReports',
        type: 'POST',
        data: form_data,
        cache: false,
        success: function(returnjson){
            var data = JSON.parse(returnjson) ;
            if (data.success) {
            displayInfo(results) ;
        }
    });*/
    /*$.post("/getProviderReports", {session_id:sessionID},
        function(returnjson, status){
            var data = JSON.parse(returnjson) ;
            if (data.success) {
                displayInfo(results) ;
            }
    }) ;*/
    var results = {
        success: true,
        reports : [
            {
                title : "Βόλτα στην εξοχή",
                date : "15/1/2018",
                ticketsSold: 450,
                revenue: 6000
            },
            {
                title : "Ποδόσφαιρο",
                date : "24/2/2018",
                ticketsSold: 160,
                revenue: 4500
            },
            {
                title : "Μπάσκετ",
                date : "19/2/2018",
                ticketsSold: 50,
                revenue: 2000
            }
        ]
    };
    displayReports(results) ;
    /*
    reports : πίνακας
        title : ο τίτλος της δραστηριότητας
        date : η ημερομηνία της δραστηριότητας
        ticketsSold: τα πωληθέντα εισιτήρια
        revenue: συνολικά έσοδα
    */
}

function displayReports(results) {
    if (results.success) {
        cont = "";
        for(var i = 0; i < results.reports.length; i++){
            let temp = results.reports[i];
            cont += "<div class=\"row change-bg-color\">" +
                        "<div class=\"col-12 col-sm-5 col-md-4 col-lg-3 col-xl-3\">" +
                            "Τίτλος: " + temp["title"] +
                        "</div>" +
                        "<div class=\"col-12 col-sm-5 col-md-4 col-lg-3 col-xl-3\">" +
                            "Ημερομηνία: " + temp["date"] +
                        "</div>" +
                        "<div class=\"col-12 col-sm-5 col-md-4 col-lg-3 col-xl-3\">" +
                            "Πωληθέντα εισιτήρια: " + temp["ticketsSold"] +
                        "</div>" +
                        "<div class=\"col-12 col-sm-5 col-md-4 col-lg-3 col-xl-3\">" +
                            "Έσοδα σε ευρώ: " + temp["revenue"] +
                        "</div>" +
                    "</div>" +
                    "<br>" ;
        }
        document.getElementById("reports").innerHTML = cont;
    }
    else {
        alert("An error has occurred.") ;
    }
}