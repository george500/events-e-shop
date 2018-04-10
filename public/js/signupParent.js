(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
      }
    
})(window, document, undefined);

//edo signup
function signup() {
    var form_data = $('#signup-form-Parent').serialize();
    var form_data_Array = $('#signup-form-Parent').serializeArray();
    var form_url = "/signup-form" ;
    var form_method = $('#signup-form-Parent').attr("method").toUpperCase();

    var data = toJSON(form_data_Array) ;

    //alert(form_data) ;
    /*form_data[i]=
    0: name
    1: surname
    2: telephone
    3: email
    4: password
    5: passwordConfirm
    6: postCode
    7: city
    8: road
    9: number
    */
    if (form_data_Array[4].value != form_data_Array[5].value) {
        alert("Οι κωδικοί δεν ταιριάζουν.") ;
    }
    else {
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
            type = 1 ;
            //alert(json.username + ", " + json.session_id + ", " + json.type) ;
            setCookie("username", json.username) ;
            setCookie("session_id", json.session_id) ;
            setCookie("type", type) ;

            window.location = "parentProfile.html" ;
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