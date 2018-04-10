(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
      }
    
})(window, document, undefined);

function signin() {
    var form_data = $('#signin-form').serialize();
    var form_data_Array = $('#signin-form').serializeArray();
    //var form_data = new FormData($(this)[0]);
    //var form_url = $('#signin-form').attr("action");
    var form_url = "/ajax-signin-form" ;
    var form_method = $('#signin-form').attr("method").toUpperCase();

    
    var data = toJSON(form_data_Array) ;

    //alert(form_data) ;
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
        username: "Giorgos",
        session_id: "15",
        type: 1
    } ;
    /*
    success: true αν όλα οκ, false αν email ή pass λάθος
    username: το username του χρήστη
    session_id: το session id
    type: 1 για γονέα, 2 για πάροχο, 3 για τον admin
    */
    if (json.success) {
        //alert(json.username + ", " + json.session_id + ", " + json.type) ;
        setCookie("username", json.username) ;
        setCookie("session_id", json.session_id) ;
        setCookie("type", json.type) ;
        switch (json.type) {
            case 3:
                window.location = "admin_parents.html" ;
                break ;
            case 2:
                window.location = "providerProfile.html" ;
                break ;
            default:
                window.location = "index.html" ;
                break ;
        }
    }
    else {
        alert("Λάθος email ή κωδικός.") ;
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
$(document).ready(function(e) {
    
    $("form[ajax=true]").submit(function(e) {
        
        e.preventDefault();
        
        var form_data = $(this).serialize();
        var form_url = $(this).attr("action");
        var form_method = $(this).attr("method").toUpperCase();
        alert(form_url) ;
        $("#loadingimg").show();

        console.log(form_data) ;

        $.ajax({
            url: form_url,
            type: form_method,
            data: form_data,
            cache: false,
            success: function(returnhtml){
                
            }
        });
        
    });
    
});
*/