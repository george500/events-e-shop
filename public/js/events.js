(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
        readURLparameters() ;
      }
    
})(window, document, undefined);

function readURLparameters() {
    var freeText = GetURLParameter('freeText') ;
    var date = GetURLParameter('date') ;
    var fromAge = GetURLParameter('fromAge') ;
    var toAge = GetURLParameter('toAge') ;
    var category = GetURLParameter('category') ;
    var fromPrice = GetURLParameter('fromPrice') ;
    var toPrice = GetURLParameter('toPrice') ;
    var fromDuration = GetURLParameter('fromDuration') ;
    var toDuration = GetURLParameter('toDuration') ;
    var tickets = GetURLParameter('tickets') ;
    var distance = GetURLParameter('distance') ;
    var latitude = GetURLParameter('latitude') ;
    var longitude = GetURLParameter('longitude') ;
    var data = {} ;
    if (freeText == null && date == null && fromAge == null && toAge == null &&
        category == null && fromPrice == null && toPrice == null &&
        fromDuration == null && toDuration == null && tickets == null &&
        distance == null && latitude == null && longitude == null) {
            return ;
        }
    if (date == 'null') {
        data.date = "" ;
    } else {
        data.date = date ;
    }
    if (fromAge == 'null') {
        data.fromAge = "" ;
    } else {
        data.fromAge = fromAge ;
    }
    if (toAge == 'null') {
        data.toAge = "" ;
    } else {
        data.toAge = toAge ;
    }
    if (freeText == 'null') {
        data.freeText = "" ;
    } else {
        data.freeText = freeText ;
    }
    if (category == 'null') {
        data.category = "" ;
    } else {
        data.category = category ;
    }
    if (fromPrice == 'null') {
        data.fromPrice = "" ;
    } else {
        data.fromPrice = fromPrice ;
    }
    if (toPrice == 'null') {
        data.toPrice = "" ;
    } else {
        data.toPrice = toPrice ;
    }
    if (fromDuration == 'null') {
        data.fromDuration = "" ;
    } else {
        data.fromDuration = fromDuration ;
    }
    if (toDuration == 'null') {
        data.toDuration = "" ;
    } else {
        data.toDuration = toDuration ;
    }
    if (tickets == 'null') {
        data.tickets = "" ;
    } else {
        data.tickets = tickets ;
    }
    if (distance == 'null') {
        data.distance = "" ;
    } else {
        data.distance = distance ;
    }
    if (latitude == 'null') {
        data.latitude = "" ;
    } else {
        data.latitude = latitude ;
    }
    if (longitude == 'null') {
        data.longitude = "" ;
    } else {
        data.longitude = longitude ;
    }
    data.searchInMap = false ;
    searchAJAX(data) ;
}

function search() {
    var freeText = document.getElementById("freeText").value ;
    var category = document.getElementById("category").value ;
    var date = document.getElementById("date").value ;
    var fromAge = parseInt(document.getElementById("fromAge").value) ;
    var toAge = parseInt(document.getElementById("toAge").value) ;
    var fromPrice = document.getElementById("fromPrice").value ;
    var toPrice = document.getElementById("toPrice").value ;
    var fromDuration = document.getElementById("fromDuration").value ;
    var toDuration = document.getElementById("toDuration").value ;
    var tickets = parseInt(document.getElementById("tickets").value) ;
    var mapCheckbox = document.querySelector('#mapCheckbox').checked;
    var distance = document.getElementById("distance").value ;
    var latitude = event_lat ;
    var longitude = event_long ;
    var data ;
    data = {
        freeText    :   freeText,
        category    :   category,
        date        :   date,
        fromAge     :   fromAge,
        toAge       :   toAge,
        fromPrice   :   fromPrice,
        toPrice     :   toPrice,
        fromDuration:   fromDuration,
        toDuration  :   toDuration,
        tickets     :   tickets,
        searchInMap :   mapCheckbox,
        distance    :   distance,
        latitude    :   latitude,
        longitude   :   longitude
    }
    if (isNaN(fromAge)) { data.fromAge = "" ; }
    if (isNaN(toAge)) { data.toAge = "" ; }
    if (isNaN(tickets)) { data.tickets = "" ; }
    //console.log(data) ;
    //return ;
    searchAJAX(data) ;
}

function searchAJAX(data) {
    //console.log(data) ;
    /*
    $.ajax({
        url: /search,
        type: 'GET',
        data: data,
        cache: false,
        success: function(returnjson){
            var result = JSON.parse(returnjson) ;
            if (result.success) {
            displayInfo(result) ;
        }
    });*/
    /*$.get("/search", data,
        function(returnjson, status){
            var result = JSON.parse(returnjson) ;
            if (result.success) {
                displayInfo(result) ;
            }
    }) ;*/
    var result = json ;
    showResultList(result) ;
}

function showResultList(results) {
    //console.log(results) ;
    showSearch() ;
    var cont = "";
    for(var i = 0; i < results.results.length; i++) {
        let temp = results.results[i];
        cont +=//
         "<div class=\"row\">"
            + "<div class=\"col-12 col-sm-4 col-md-2 col-lg-2 col-xl-1\">"
            +   "<img src=\"" + temp["imageURL"] + "\" onclick=\"location.href = 'event.html?id=" + temp.id + "';\" alt=\"Εικόνα δραστηριότητας\" id=\"imgEvent"+ temp.id +"\" >"
            + "</div>"
            + "<div class=\"col-12 col-sm-6 col-md-2 col-lg-2\">"
            +     "<dl class=\"meta-search\" id=\"res1\" >"
            +         "<dd><span>"+ temp["name"] +"</span></dd>"
            +         "<dd><span>"+ temp["type"] +"</span></dd>"
            +         "<dd><span>"+ temp["age_from"] + " εως " + temp["age_to"] +"</span></dd>"
            +     "</dl>"
            + "</div>"
            +  "<div class=\"col-12 col-sm-12 col-md-4 col-lg-3\">"
                + "<p >"+ temp["description"] +"</p>"
            + "</div>"
            + "<div class=\"col-12 col-sm-6 col-md-2 col-lg-1\">"
            + "   <dl class=\"meta-search\">"
            + "       <dd><span>"+ temp["date"] +"</span></dd>"
            + "       <dd><span>"+ temp["time_from"] +"</span></dd>"
            + "       <dd><span>"+ temp["time_to"] +"</span></dd>"
            + "    </dl>"
            + "</div>"
            + "<div class=\"col-12 col-sm-6 col-md-6 col-lg-2\">"
            + "    <dl class=\"meta-search\">"
            + "        <dd><span>Τιμή εισιτηρίου: "+ temp["ticket_price"] +"</span></dd>"
            + "        <dd><span>Διαθέσιμα εισιτήρια: "+ temp["available_tickets"] +"</span></dd>"
            + "        <dd><span>Πωληθέντα εισιτήρια: "+ temp["sold_tickets"] +"</span></dd>"
            + "    </dl>"
            + "</div>"
            + "<div class=\"col-12 col-sm-12 col-md-3 col-lg-1\">"
            + "    <dl class=\"meta-search\">"
            //+ "        <dd><button type=\"button\" class=\"btn btn-primary btn-lg\">Χάρτης</button></dd>"
            + "        <dd><button type=\"button\" class=\"btn btn-warning btn-lg\" onclick=\"location.href = 'event.html?id=" + temp.id + "';\">Αγορά</button></dd>"
            + "    </dl>"
            + "</div>"
            + "</div>"
            + "<br>" ;
    }
    document.getElementById("events").innerHTML = cont;
    showResultsOnMap(results) ;
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
        },
        {
            id:"159209",
            name:"Κινηματογραφική αυλαία",
            type:"Ταινίες",
            age_from : 4,
            age_to : 12,
            description  : "Το φεστιβάλ κινηματογράφου που δεν πρέπει να χάσετε. Θα μας βρείτε στον Δαναό.",
            time_from : "9:00 πμ",
            time_to : "9:00 μμ",
            date : "18/04/2018",
            ticket_price : 15,
            available_tickets : 400,
            sold_tickets : 85,
            latitude : 37.993390,
            longtitude : 23.766847,
            imageURL : "./public/assets/images/event_image_14.jpg",
            views : 200
        },
        {
            id:"159210",
            name:"Super bowl",
            type:"Αθλητισμός",
            age_from : 5,
            age_to : 10,
            description  : "Ημερήσιο τουρνουά bowling με ελαφριές μπάλες για παιδιά, ειδικά παπούτσια σε όμορφο ασφαλή χώρο",
            time_from : "10:00 πμ",
            time_to : "6:00 μμ",
            date : "28/05/2018",
            ticket_price : 15,
            available_tickets : 220,
            sold_tickets : 60,
            latitude : 37.975444,
            longtitude : 23.669585,
            imageURL : "./public/assets/images/event_image_15.jpg",
            views : 140
        }
    ]
} ;