var json ;
var list ;
(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom Has loaded
        // #document Has its nodes
        changeNavbar() ;
        loadHasHeld_list();
      }
    
})(window, document, undefined);

function loadHasHeld_list() {
    var sessionID = getCookie("session_id") ;
    /*var form_data = {session_id:sessionID} ;
    $.ajax({
        url: '/getProviderPastEvents',
        type: 'POST',
        data: form_data,
        cache: false,
        success: function(returnjson){
            result = JSON.parse(returnjson) ;
        }
    });*/
    /*$.post("/getProviderPastEvents", {session_id:sessionID},
        function(data, status){
            result = JSON.parse(returnjson) ;
        }
    }) ;*/
    result = json ;
    if (result.success) {
        showHasHeld_list(json) ;
    } else {
        alert("Υπήρξε κάποιο πρόβλημα.") ;
    }
}

function showHasHeld_list(res) {
    var cont = "";
    for(var i = 0; i < res.results.length; i++){
        let temp = res.results[i];
        cont += "     <div class=\"row\">"
            + "          <div class=\"col-12 col-sm-4 col-md-2 col-lg-2 col-xl-1\">"
            + "             <img src=\"" + temp["imageURL"] + "\" onclick=\"location.href = 'event.html?id=" + temp.id + "';\" alt=\"Εικόνα δραστηριότητας\" id=\"imgEvent"+ temp.id +"\" >"
            + "          </div>"
            + "          <div class=\"col-12 col-sm-6 col-md-2 col-lg-2\">"
            + "              <dl class=\"meta-search\">"
            + "                  <dd><span>"+temp["event_name"]+"</span></dd>"
            + "                  <dd><span>"+temp["event_type"]+"</span></dd>"
            + "                  <dd><span>"+temp["age_from"]+" έως "+temp["age_to"]+"</span></dd>"
            + "              </dl>"
            + "          </div>"
            + "          <div class=\"col-12 col-sm-12 col-md-4 col-lg-3\">"
            + "              <p>"+temp["description"]+"</p>"
            + "          </div>"
            + "          <div class=\"col-12 col-sm-6 col-md-2 col-lg-1\">"
            + "              <dl class=\"meta-search\">"
            + "                  <dd><span>"+temp["date"]+"</span></dd>"
            + "                  <dd><span>"+temp["time_from"]+"</span></dd>"
            + "                  <dd><span>"+temp["time_to"]+"</span></dd>"
            + "              </dl>"
            + "          </div>"
            + "          <div class=\"col-12 col-sm-6 col-md-6 col-lg-2\">"
            + "              <dl class=\"meta-search\">"
            + "                  <dd><span>Πωληθέντα εισιτήρια: "+temp["sold_tickets"]+"</span></dd>"
            + "                  <dd><span>Διαθέσιμα εισιτήρια: "+temp["available_tickets"]+"</span></dd>"
            + "                  <dd><span>Τιμή εισιτηρίου: "+temp["ticket_price"]+"</span></dd>"
            + "              </dl>"
            + "          </div>"
            + "          <div class=\"col-12 col-sm-12 col-md-3 col-lg-1\">"
            + "              <dl class=\"meta-search\">"
            + "                 <dd><span>Προβολές δραστηριότητας: "+temp["views"]+"</span></dd>"
            + "                 <dd><button type=\"button\" class=\"btn btn-primary btn-lg\" onclick=\"location.href = 'event.html?id=" + temp.id + "';\">Σελίδα</button></dd>"
            + "              </dl>"
            + "          </div>"
            + "      </div>"
            + "       <br>" ;
    }
    document.getElementById("hasHeld_list").innerHTML = cont;

}

json = {
    success : true,
    results : [
        {
            id:"159198",
            event_name:"Ζωγραφική",
            event_type:"Καλλιτεχνικά",
            age_from : 3,
            age_to : 7,
            description  : "Εργαστήρι ζωγραφικής για τους μικρούς μας φίλους.",
            time_from : "10:00 πμ",
            time_to : "2:00 μμ",
            date : "02/02/2018",
            ticket_price : 8,
            available_tickets : 40,
            sold_tickets : 38,
            latitude : 38.031502,
            longtitude : 23.795464,
            imageURL : "./public/assets/images/event_image_10.jpg",
            views : 150
        },
        {
            id:"159199",
            event_name:"Παιδικό μουσικοθεατρικό εργαστήρι.",
            event_type:"Καλλιτεχνικά",
            age_from : 4,
            age_to : 9,
            description  : "Ανακαλύπτουμε μαζί πως εκφραζόμαστε μέσα από τις κινήσεις και την μουσική.",
            time_from : "10:00 πμ",
            time_to : "2:00 μμ",
            date : "02/02/2018",
            ticket_price : 14,
            available_tickets : 25,
            sold_tickets : 21,
            latitude : 37.987989,
            longtitude : 23.744564,
            imageURL : "./public/assets/images/event_image_11.jpg",
            views : 92
        },
        {
            id:"159200",
            event_name:"Μαγειρική με τον Πίκατσου",
            event_type:"Μαγειρική",
            age_from : 10,
            age_to : 12,
            description  : "Τα παιδιά διασκεδάζουν μαγειρεύοντας με τον πίκατσου τάρτες λεμονιού. Θα μας βρείτε στο μαγικό σεντούκι.",
            time_from : "1:00 μμ",
            time_to : "3:00 μμ",
            date : "26/02/2018",
            ticket_price : 20,
            available_tickets : 50,
            sold_tickets : 48,
            latitude : 37.987850,
            longtitude : 23.737200,
            imageURL : "./public/assets/images/event_image_12.jpg",
            views : 121
        }
    ]
};