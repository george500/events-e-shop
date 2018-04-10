(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
        //initMap() ;
      }
    
})(window, document, undefined);

function cancelCreation() {
    window.location = "providerProfile_events.html" ;
}

function createEvent() {
    var form_data = $('#create-event').serialize();
    var form_data_Array = $('#create-event').serializeArray();
    
    var data = toJSON(form_data_Array) ;

    var afmFile = document.getElementById('inputImage').files[0] ;

    data.latitude = event_lat ;
    data.longitude = event_long ;

    if (data.latitude == null || data.longitude == null) {
        alert("Παρακαλώ επιλέξτε την τοποθεσία της δραστηριότητας στον χάρτη.") ;
        return ;
    }

    var frJSON ;
    var afmFileJSON  = {
        'lastModified'     : afmFile.lastModified,
        'lastModifiedDate' : afmFile.lastModifiedDate,
        'name'             : afmFile.name,
        'size'             : afmFile.size,
        'type'             : afmFile.type,
        'webkitRelativePath' : afmFile.webkitRelativePath
     };

    fr = new FileReader();
    //fr.onload = receivedText;
    //fr.readAsText(file);
    
    fr.onload = function(event) {
        // The file's text will be printed here
        frJSON = {
            'result' : event.target.result
        }
        data.file = afmFileJSON ;
        data.fileReader = frJSON ;
        continueAJAX(data) ;
      };
    fr.readAsDataURL(afmFile) ;
    //console.log(fr) ;
    //console.log(afmFileJSON) ;
    /*var frJSON  = {
        'error'         : fr.error,
        'onabort'       : fr.onabort,
        'onerror'       : fr.onerror,
        'onload'        : fr.onload,
        'onloadend'     : fr.onloadend,
        'onloadstart'   : fr.onloadstart,
        'onprogress'    : fr.onprogress,
        'readyState'    : fr.readyState,
        'result'        : fr.result
     };
    //console.log(frJSON) ;*/
}

function continueAJAX(data) {
    var form_url = "/create-event" ;
    var form_method = $('#create-event').attr("method").toUpperCase();
    //console.log(data) ;
    //return ;
    /*
    json = {
        afm
        busName
        city
        email
        file = {
            lastModified : "1450209064866"
            lastModifiedDate : "Tue Dec 15 2015 21:51:04 GMT+0200 (GTB Standard Time)"
            name             : "to_onoma_tou_arxeiou.pdf"
            size             : 1157851
            type             : "application/pdf"
            webkitRelativePath : ""
        }
        fileReader = {
            'result'        : "data:application/pdf;base64,JVBERi0xLjUNJeLjz9MNCjQ3NDcgMCBvYmoNPDwvTGluZWFyaXplZCAxL0wgMT"
        }
        latitude
        longitude
        name
        number
        password
        passwordConfirm
        postCode
        road
        surname
        telephone
    }
    */
    /*
    $.ajax({
        url: form_url,
        type: form_method,
        data: data,
        cache: false,
        success: function(returnjson){
            var json = JSON.parse(returnjson) ;
        }
    });
    */
    var json = {
        success: true,
    } ;
    /*
    success: true αν όλα οκ, false αν email ή pass λάθος
    */
    if (json.success) {
        //alert("Hello.") ;
        type = 2 ;
        //alert(json.username + ", " + json.session_id + ", " + json.type) ;
        setCookie("username", json.username) ;
        setCookie("session_id", json.session_id) ;
        setCookie("type", type) ;

        alert("Η δραστηριότητα δημιουργήθηκε με επιτυχία.")
        window.location = "providerProfile_events.html" ;
    }
    else {
        alert("Υπήρξε κάποιο σφάλμα.") ;
    }
}

function toJSON(form_data_Array) {
    var returnArray = {};
    for (var i = 0; i < form_data_Array.length; i++){
        returnArray[form_data_Array[i]['name']] = form_data_Array[i]['value'];
    }
    return returnArray;
}