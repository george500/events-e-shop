(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
      }
    
})(window, document, undefined);

function signup() {
    var form_data = $('#signup-form-Provider').serialize();
    var form_data_Array = $('#signup-form-Provider').serializeArray();
    var form_url = "/signup-form-provider" ;
    var form_method = $('#signup-form-Provider').attr("method").toUpperCase();
    
    var data = toJSON(form_data_Array) ;

    var afmFile = document.getElementById('inputAfmFile').files[0] ;

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
    //console.log(data) ;
    //return ;
    
    /*form_data=
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
    if (data['password'].value != data['passwordConfirm'].value) {
        alert("Οι κωδικοί δεν ταιριάζουν.") ;
    }
    else {
        /*
        $.ajax({
            url: form_url,
            type: form_method,
            data: form_data,
            cache: false,
            success: function(returnjson){
                var json = JSON.parse(returnjson) ;
            }
        });
        */
        var json = {
            success: true,
            emailTaken: false,
            username: "Giorgos",
            session_id: "15"
        } ;
        /*
        success: true αν όλα οκ, false αν email ή pass λάθος
        emailTaken: false αν δεν χρησιμοποιείται ήδη, true εάν χρησιμοποιείται
        username: το username του χρήστη
        session_id: το session id
        */
        if (json.success) {
            //alert("Hello.") ;
            type = 2 ;
            //alert(json.username + ", " + json.session_id + ", " + json.type) ;
            setCookie("username", json.username) ;
            setCookie("session_id", json.session_id) ;
            setCookie("type", type) ;

            window.location = "providerProfile.html" ;
        }
        else {
            if (json.emailTaken) {
                alert("Το email αυτό χρησιμοποιείται ήδη.")
            }
            else {
                alert("Έγινε κάποιο σφάλμα.") ;
            }
        }
    }
}

function toJSON(form_data_Array) {
    var returnArray = {};
    for (var i = 0; i < form_data_Array.length; i++){
        returnArray[form_data_Array[i]['name']] = form_data_Array[i]['value'];
    }
    return returnArray;
}

/*
//edo signup
$(document).ready(function (e) {
    $("#uploadimage").on('submit',(function(e) {
    e.preventDefault();
    $("#message").empty();
    $('#loading').show();
    }
}
*/