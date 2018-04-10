var result ;
(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
        loadToHold_list();
      }
    
})(window, document, undefined);

function loadToHold_list() {

    var sessionID = getCookie("session_id") ;
    result ;
    /*
    var form_data = {session_id:sessionID} ;
    $.ajax({
        url: '/getProviderEvents',
        type: 'POST',
        data: form_data,
        cache: false,
        success: function(returnjson){
            result = JSON.parse(returnjson) ;
            if (result.success) {
            showBills(result) ;
        }
    });
    */
    /*
    $.post("/getProviderEvents", {session_id:sessionID},
        function(returnjson, status){
            result = JSON.parse(returnjson) ;
            if (result.success) {
                showBills(result) ;
            }
    });
    */
    result = json ;
    if (result.success) {
        showToHold_list(result);
    } else {
        alert("Υπήρξε κάποιο πρόβλημα.") ;
    }
}

function showToHold_list() {
    res = result ;
    cont = "";
    for(var i = 0; i < res.results.length; i++) {
        let temp = res.results[i];
        cont += "<div class=\"row\">"
            + "      <div class=\"col-12 col-sm-4 col-md-2 col-lg-2 col-xl-1\">"
            + "         <img src=\"" + temp["imageURL"] + "\" onclick=\"location.href = 'event.html?id=" + temp.id + "';\" alt=\"Εικόνα δραστηριότητας\" id=\"imgEvent"+ temp.id +"\" >"
            +"       </div>"
            +"       <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2\">"
            +"           <dl class=\"meta-search\">"
            +"               <dd><span>"+temp["name"]+"</span></dd>"
            +"               <dd><span>"+temp["type"]+"</span></dd>"
            +"               <dd><span>"+temp["age_from"]+" έως "+temp["age_to"]+"</span></dd>"
            +"           </dl>"
            +"       </div>"
            +"       <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">"
            +"           <p>"+temp["description"]+"</p>"
            +"       </div>"
            +"       <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-1\">"
            +"           <dl class=\"meta-search\">"
            +"               <dd><span>"+temp["date"]+"</span></dd>"
            +"               <dd><span>"+temp["time_from"]+"</span></dd>"
            +"               <dd><span>"+temp["time_to"]+"</span></dd>"
            +"           </dl>"
            +"       </div>"
            +"       <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-2\">"
            +"           <dl class=\"meta-search\">"
            +"               <dd><span>Προβολές δραστηριότητας: "+temp["views"]+"</span></dd>"
            +"               <dd><span>Πωληθέντα εισιτήρια: "+temp["sold_tickets"]+"</span></dd>"
            +"               <dd><span>Διαθέσιμα εισιτήρια: "+temp["available_tickets"]+"</span></dd>"
            +"               <dd><span>Τιμή εισιτηρίου: "+temp["ticket_price"]+"</span></dd>"
            +"           </dl>"
            +"       </div>"
            +"       <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-2\">"
            +"           <dl class=\"meta-search\">"
            +"              <dd><button type=\"button\" class=\"btn btn-primary btn-lg\" onclick=\"location.href = 'event.html?id=" + temp.id + "';\">Σελίδα</button></dd>"
            +"              <dd><button type=\"button\" class=\"btn btn-danger btn-sm\" onclick=\"cancelEvent(" + temp.id + ")\">Ακύρωση </button></dd>"
            +"           </dl>"
            +"       </div>"
            +"   </div>"
            +"  <br>" ;
    }
    document.getElementById("toHold_list").innerHTML = cont;
}

function cancelEvent(id) {
    var sessionID = getCookie("session_id") ;
    var result1 ;
    /*
    var form_data = {session_id:sessionID, event_id : id} ;
    $.ajax({
        url: '/cancelEvent',
        type: 'POST',
        data: form_data,
        cache: false,
        success: function(returnjson){
            result1 = JSON.parse(returnjson) ;
        }
    });
    */
    /*
    $.post("/getProviderEvents", {session_id:sessionID, event_id : id},
        function(returnjson, status){
            result1 = JSON.parse(returnjson) ;
    });
    */
    result1 = {
        success : true
    } ;
    if (result1.success) {
        for(var i=0; i<result.results.length; i++) {
            if (result.results[i].id == id) {
                //console.log(list.parent_list[i].user_id+result.user_id) ;
                result.results.splice(i,1) ;
                showToHold_list() ;
                alert("Η δραστηριότητα ακυρώθηκε επιτυχώς.") ;
                break ;
            }
        }
    } else {
        alert("Υπήρξε κάποιο πρόβλημα.") ;
    }

}

var json = {
    success : true,
    results : [
        {
            id:"159204",
            name:"Πρωταθληματάκι ποδοσφαίρου",
            type:"Αθλητισμός",
            age_from : 8,
            age_to : 12,
            description  : "Σας προσκαλούμε στο πρωταθληματάκι που διοργανώνουμε στα υπερσύγχρονα γήπεδα ποδοσφαίρου 5x5 και 8x8 για να διασκεδάσουμε μικροί και μεγάλοι.",
            time_from : "4:30μμ",
            time_to : "6:30μμ",
            date : "05/12/2018",
            ticket_price : 20,
            available_tickets : 150,
            sold_tickets : 50,
            latitude : 37.967601,
            longitude : 23.667994,
            imageURL : "./public/assets/images/event_image_4.jpg",
            views : 60
        },
        {
            id:"159205",
            name:"Θεατρικό παιχνίδι",
            type:"Καλλιτεχνικά",
            age_from : "5",
            age_to : "12",
            description  : "Ελάτε μαζί μας σε ένα υπέροχο ταξίδι στην καλλιέργεια της αισθητικής αντίληψης.",
            time_from : "2:00μμ",
            time_to : "5:00μμ",
            date : "11/03/2018",
            ticket_price : "7",
            available_tickets : "80",
            sold_tickets : "15",
            latitude : 37.981120,
            longitude : 23.736225,
            imageURL : "./public/assets/images/event_image_8.jpg",
            views : 40
        },
        {
            id:"159206",
            name:"Καραγκιόζης Θέατρο Σκιών",
            type:"Καλλιτεχνικά",
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
            imageURL : "./public/assets/images/event_image_7.jpg",
            views : 505
        },
        {
            id:"159207",
            name:"Πρωταθληματάκι μπάσκετ",
            type:"Αθλητισμός",
            age_from : 6,
            age_to : 16,
            description  : "Ελάτε να παίξετε μπάσκετ μαζί με τους θρύλους Νίκο Γκάλη και Παναγιώτη Γιαννάκη. Μόνο για μία μέρα, προλάβετε.",
            time_from : "12:01 μμ",
            time_to : "9:30 μμ",
            date : "19/03/2018",
            ticket_price : 25,
            available_tickets : 200,
            sold_tickets : 56,
            latitude : 38.036039,
            longtitude : 23.787757,
            imageURL : "./public/assets/images/event_image_6.jpg",
            views : 108
        },
        {
            id:"159208",
            name:"Εκδρομή στο μουσείο της Ακρόπολης",
            type:"Αποδράσεις",
            age_from : 5,
            age_to : 15,
            description  : "Ένα ταξίδι στην ιστορία μας περιμένει. Σας καλούμε όλους στην ξενάγηση στο μουσείο της Ακρόπολης.",
            time_from : "9:00 πμ",
            time_to : "1:00 μμ",
            date : "4/03/2018",
            ticket_price : 5,
            available_tickets : 222,
            sold_tickets : 45,
            latitude : 38.036039,
            longtitude : 23.787757,
            imageURL : "./public/assets/images/event_image_9.jpg",
            views : 150
        }
    ]
} ;