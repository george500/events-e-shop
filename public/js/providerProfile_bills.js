(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
        loadBills()  ;
      }
    
})(window, document, undefined);

function loadBills() {
    var sessionID = getCookie("session_id") ;
    var results ;
    /*var form_data = {session_id:sessionID} ;
    $.ajax({
        url: '/getProviderBills',
        type: 'POST',
        data: form_data,
        cache: false,
        success: function(data){
            var data = JSON.parse(returnjson) ;
            if (data.success) {
            showBills(data) ;
        }
    });*/
    /*$.post("/getProviderBills", {session_id:sessionID},
        function(returnjson, status){
            var data = JSON.parse(returnjson) ;
            if (data.success) {
                showBills(data) ;
            }
    }) ;*/
    var results = {
        success: true,
        bills : [
            {
                bill_no : 1234,
                date : "30/2/2015",
                payment: 650
            },
            {
                bill_no : 1665,
                date : "17/4/2015",
                payment: 656
            },
            {
                bill_no : 2000,
                date : "20/1/2016",
                payment: 900
            },
            {
                bill_no : 3333,
                date : "12/12/2012",
                payment: 1212
            }
        ]
    };
    showBills(results) ;
    /*
    success: true αν επιστρέφονται τα τιμολόγια, false διαφορετικά
    bills: πίνακας με όλα τα τιμολόγια
    */
}

function showBills (res) {
    if (res.success) {
        document.getElementById("bills_list_length").innerHTML = res.bills.length;
        cont = "";
        for(var i = 0; i < res.bills.length; i++){
            let temp = res.bills[i];
            cont += "<article class=\"search-result row card\">"
                +  "         <div>"
                +  "           <p><a> Αριθμός Τιμολογίου: " + temp["bill_no"] + " </a></p>"
                +  "              <p><a> Εκδόθηκε στις: " + temp["date"] + "</a></p>"
                +  "              <p><a> Ποσό : " + temp["payment"] + " ευρώ</a></p>"
                +  "          </div>"
                +  "          <span class=\"clearfix borda\"></span>"
                +  "      </article>"
                +  "      <br>" ;
        }
        document.getElementById("bills_list").innerHTML = cont;
    }
    else {
        alert("Υπήρξε κάποιο πρόβλημα.") ;
    }
};