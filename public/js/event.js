var result ;
var id ;
(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
        loadEvent_and_initMap();
        // initMap() ;
      }

})(window, document, undefined);

// function loadEvent() {
function loadEvent_and_initMap () {
    id = GetURLParameter('id') ;
    if (id == null) {
        result = {
            success : true,
            event_info : {
                event_name:"",
                event_type:"",
                age_from : "",
                age_to : "",
                description  : "",
                time_from : "",
                time_to : "",
                date : "",
                ticket_price : "",
                available_tickets : "",
                sold_tickets : "",
                latitude : "",
                longitude : "",
                imageURL : ""
            }
        };
        showEvent(result) ;
        return ;
    }
    /*var data = {eventID : id} ;
    $.ajax({
        url: '/getEventInfo',
        type: 'GET',
        data: form_data,
        cache: false,
        success: function(returnjson){
            result = JSON.parse(returnjson) ;
            if (result.success) {
                showEvent(result) ;
            }
            else {
                alert("Υπήρξε κάποιο πρόβλημα.") ;
            }
        }
    });*/
    /*$.get("/getEventInfo", {eventID : id},
        function(returnjson, status){
            result = JSON.parse(returnjson) ;
            if (result.success) {
                showEvent(result) ;
            }
            else {
                alert("Υπήρξε κάποιο πρόβλημα.") ;
            }
    }) ;*/
    result = json ;
    showEvent(result);
    initMap(result) ;
}

function buyTickets() {
    var sessionID = getCookie("session_id") ;
    console.log("session id", sessionID) ;
    sessionID = "15" ;
    if(sessionID == "") {
        alert("Πρέπει να είστε συνδεδεμένος/η για να αγοράσετε εισιτήριο.") ;
    }
    else {
        var ticketsNo = parseInt(document.getElementById('tickets').value) ;
        //console.log(ticketsNo, parseInt(result.event_info.available_tickets)) ;
        if (isNaN(ticketsNo)) {
            alert("Παρακαλώ εισάγεται το πλήθος των εισιτηρίων που θέλετε να αγοράσετε.") ;
            return ;
        }
        else if (ticketsNo == 0) {
            alert("Δεν μπορείτε να αγοράσετε 0 εισιτήρια.") ;
            return ;
        }
        if (ticketsNo > result.event_info.available_tickets) {
            alert("Τα διαθέσιμα εισιτήρια είναι" + result.event_info.available_tickets + ".") ;
            return ;
        }
        //console.log(ticketsNo) ;
        /*$.post("/buyTickets", {session_id : session_id, eventID : id, tickets : ticketsNo},
        function(returnjson, status){
            var result1 = JSON.parse(returnjson) ;
            if (result1.success) {
                if (ticketsNo > 1) {
                    alert("Τα εισιτήρια αγοράστηκαν με επιτυχία.") ;
                } else {
                    alert("Το εισιτήριο αγοράστηκε με επιτυχία.") ;
                }
            }
            else {
                if (result1.points) {
                    alert("Το υπόλοιπό σας σε πόντους δεν επαρκεί, η αγορά του απέτυχε.") ;
                }
                else {
                    alert("Υπήρξε κάποιο πρόβλημα, η αγορά απέτυχε.") ;
                }
            }
        }) ;*/
        result1 = {
            success : true,
            points : false,
        }
        if (result1.success) {
            if (ticketsNo > 1) {
                alert("Τα εισιτήρια αγοράστηκαν με επιτυχία.") ;
            } else {
                alert("Το εισιτήριο αγοράστηκε με επιτυχία.") ;
            }
        }
        else {
            if (result1.points) {
                alert("Το υπόλοιπό σας σε πόντους δεν επαρκεί, η αγορά απέτυχε.") ;
            }
            else {
                alert("Υπήρξε κάποιο πρόβλημα, η αγορά απέτυχε.") ;
            }
        }
    }
}

function showEvent(res) {
    var cont = "" ;
    if(res.success) {
        let temp = res.event_info ;
        document.getElementById("event_title").innerHTML =  "<div class=\"row\"> "+temp["event_name"]+" </div>";
        cont += "<div class=\"col-12 col-sm-4 col-md-2 col-lg-2 col-xl-1\">"
        + "     <img src=\"" + temp["imageURL"] + "\" alt=\"Εικόνα δραστηριότητας\"/>"
        + " </div>"
        + " <div class=\"col-12 col-sm-8 col-md-10 col-lg-5 col-xl-4\">"
        + "     <dl>"
        + "         <dd><span>Τιμή εισιτηρίου: "+temp["ticket_price"]+"</span></dd>"
        + "         <dd><span>Διαθέσιμα εισιτήρια: "+temp["available_tickets"]+"</span></dd>"
        + "         <dd><span>Πωληθέντα εισιτήρια: "+temp["sold_tickets"]+"</span></dd>"
        + "         <dd><span>Κατηγορία: "+temp["event_type"]+"</span></dd>"
        + "         <dd><span>Ηλικία: "+temp["age_from"]+" έως "+temp["age_to"]+"</span></dd>"
        + "         <dd><span>"+temp["description"]+"</span></dd>"
        + "     </dl>"
        + " </div>"
        + " <div class=\"col-12 col-sm-5 col-md-4 col-lg-2\">"
        + "     <dl>"
        + "         <dd><span>Ημερομηνία: "+temp["date"]+"</span></dd>"
        + "         <dd><span>Έναρξη: "+temp["time_from"]+"</span></dd>"
        + "         <dd><span>Λήξη: "+temp["time_to"]+"</span></dd>"
        + "     </dl>"
        + " </div>"
        + " <div class=\"col-12 col-sm-6 col-md-4 col-lg-2\">"
        + "     <label>Επιλέξτε αριθμό εισητητρίων:</label>"
        + "     <input type=\"number\" class=\"form-control\" id=\"tickets\">"
        + "     <br>"
        + "     <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" onclick=\"javascript:buyTickets()\">Αγορά</button>"
        + " </div>";
        document.getElementById("event_info").innerHTML = cont;
    }
    else{
        alert("An error has occures");
    }
}

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

var json = {
    success : true,
    event_info : {
        event_name:"Καραγκιόζης Θέατρο Σκιών",
        event_type:"Καλλιτεχνικά",
        age_from : "2",
        age_to : "14",
        description  : "Ο γνωστός καραγκιοζοπαίχτης Ευγένιος Σπαθάρης θα παίξει για εμάς το έργο <<Ο καραγκιόζης στην Ευρώπη>>. Μην το χάσετε.",
        time_from : "4:30μμ",
        time_to : "6:30μμ",
        date : "05/03/2018",
        ticket_price : "10",
        available_tickets : "150",
        sold_tickets : "44",
        latitude : 37.976782,
        longitude : 23.725126,
        imageURL : "./public/assets/images/event_image_7.jpg"
    }
} ;