(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
      }
    
})(window, document, undefined);

function forgotPassword() {
    var form_data = $('#forgot-password-form').serialize();
    var form_data_Array = $('#forgot-password-form').serializeArray();
    //var form_data = new FormData($(this)[0]);
    //var form_url = $('#forgot-password-form').attr("action");
    var form_url = "/forgot-password-form" ;
    var form_method = $('#forgot-password-form').attr("method").toUpperCase();

    var data = toJSON(form_data_Array) ;
    //console.log(data) ;
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
        success: true
    } ;
    /*
    success: true αν όλα οκ, false αν συνέβη κάποιο σφάλμα
    */
    if (json.success) {
        alert("Στάλθηκε email που περιέχει οδηγίες για την επαναφορά του κωδικού σας.") 
        window.location = "index.html" ;
    }
    else {
        alert("Ύπήρξε κάποιο σφάλμα, η επαναφορά τουκωδικού σας δεν κατέστη δυνατή.") ;
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