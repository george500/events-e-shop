(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
        readURLparameter() ;
      }
    
})(window, document, undefined);

function search() {
    var date = document.getElementById("date").value ;
    var fromAge = parseInt(document.getElementById("fromAge").value) ;
    var toAge = parseInt(document.getElementById("toAge").value) ;
    var data ;
    data = {
        date        :   date,
        fromAge     :   fromAge,
        toAge       :   toAge
    }
    var isFirst = true ;
    var url = "events.html" ;
    var symbol ;
    if (date != "") {
        if (isFirst) {
            symbol = "?" ;
            isFirst = false ;
        } else { symbol = "&" ;}
        url += symbol + "date=" + date ;

    }
    if (isNaN(fromAge)) { data.fromAge = "" ; }
    else {
        if (isFirst) {
            symbol = "?" ;
            isFirst = false ;
        } else { symbol = "&" ;}
        url += symbol + "fromAge=" + fromAge ;
    }
    if (isNaN(toAge)) { data.toAge = "" ; }
    else {
        if (isFirst) {
            symbol = "?" ;
            isFirst = false ;
        } else { symbol = "&" ;}
        url += symbol + "toAge=" + toAge ;
    }
    window.location = url ;
}

function readURLparameter() {
    id = GetURLParameter('signout') ;
}

function signout() {
    var sessionID = getCookie("session_id") ;
    var result ;
    /*var form_data = {session_id:sessionID} ;
    $.ajax({
        url: '/signout',
        type: 'POST',
        data: form_data,
        cache: false,
        success: function(returnjson){
            result = JSON.parse(returnjson) ;
            if (result.success) {
                deleteAllCookies() ;
            }
        }
    });*/
    /*$.post("/getParentEvents", {session_id:sessionID},
        function(returnjson, status){
            result = JSON.parse(returnjson) ;
            if (result.success) {
                deleteAllCookies() ;
            }
    }) ;*/
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