var list
(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
        loadProviders();
      }

})(window, document, undefined);

function changeUser(user_id, action) {
    /*
    action:
    1 -> reset password
    2 -> delete user
    3 -> lock/unlock user
    4 -> change rights
    */
    var sessionID = getCookie("session_id");
    var form_data = {
        session_id : sessionID,
        user_id : user_id,
        action : action
    } ;
    /*$.ajax({
        url: '/changeUser',
        type: 'POST',
        data: form_data,
        cache: false,
        success: function(returnjson){
            var result = JSON.parse(returnjson) ;
            if (result.success) {
            showParents(result) ;
        }
    });*/
    /*$.post("/changeUser", {session_id:sessionID},
        function(returnjson, status){
            var result = JSON.parse(returnjson) ;
            if (result.success) {
                showParents(result) ;
            }
    }) ;*/
    var result = {
        success : true,
        user_id : user_id,
        is_locked : 1,
        can_create : 0
    }
    if (result.success) {
        if (action == 1) {
            alert("Η επαναφορά του κωδικού του παρόχου ήταν επιτυχής.") ;
        }
        else if (action == 2) {
            for(var i=0; i<list.providers_list.length; i++) {
                let temp = list.providers_list[i];
                if (list.providers_list[i].user_id == result.user_id) {
                    //console.log(list.providers_list[i].user_id+result.user_id) ;
                    list.providers_list.splice(i,1) ;
                    showProviders() ;
                    alert("Ο πάροχος διεγράφη με επιτυχία.") ;
                    break ;
                }
            }
        }
        else if (action == 3) {
            for(var i=0; i<list.providers_list.length; i++) {
                if (list.providers_list[i].user_id == result.user_id) {
                    list.providers_list[i].is_locked = result.is_locked ;
                    list.providers_list[i].can_create = result.can_create ;
                    showProviders() ;
                    alert("Η κατάσταση κλειδώματος του παρόχου άλλαξε με επιτυχία.") ;
                    break ;
                }
            }
        }
        else if (action == 4) {
            for(var i=0; i<list.providers_list.length; i++) {
                    if (list.providers_list[i].user_id == result.user_id) {
                        list.providers_list[i].is_locked = result.is_locked ;
                        list.providers_list[i].can_create = result.can_create ;
                        showProviders() ;
                        alert("Τα διακαιώματα του παρόχου άλλαξαν με επιτυχία.") ;
                        break ;
                }
            }
        }
    }
    else (
        alert("Υπήρξε κάποιο σφάλμα, η διαδικασία δεν ολοκληρώθηκε.")
    )
}

function loadProviders() {
        var sessionID  = getCookie("session_id");
        var results;
        /**/
        /*var form_data = {session_id:sessionID} ;
        $.ajax({
            url: '/getProviders',
            type: 'POST',
            data: form_data,
            cache: false,
            success: function(returnjson){
            list = JSON.parse(returnjson) ;
                if (list.success) {
                    showProviders(list) ;
                }
            }
        });*/
        /*$.post("/getProviders", {session_id:sessionID},
            function(returnjson, status){
            list = JSON.parse(returnjson) ;
                if (list.success) {
                    showProviders(list) ;
                }
        }) ;*/
        /**/
    list = {
        success: true,
        providers_list : [
            {
                user_id : 10,
                first_name : "Παναγιώτης",
                last_name : "Διαμαντάκης",
                mail : "mail@mail.com",
                phone : "2101234567",
                zip_code : "73100",
                city : "Χανιά",
                address_str : "Τζανακάκη",
                address_no : "93",

                afm : "13245678",
                brand_name : "Κουζίνα Α.Ε.",
                iban : "GR1601100400000004012321438",

                is_locked : 0,
                can_create : 1
            },
            {
                user_id : 11,
                first_name : "James",
                last_name : "Green",
                mail : "mjgr@mdo.gr",
                phone : "2107777777",
                zip_code : "14100",
                city : "Αθηνα",
                address_str : "Πανεπιστημίου",
                address_no : "24",

                afm : "18593849",
                brand_name : "Δραστηριότητες Α.Ε.",
                iban : "GR1601100400000004012343421",

                is_locked : 1,
                can_create : 0
            },
            {
                user_id : 12,
                first_name : "Παπαδόδημας",
                last_name : "Γεώργιος",
                mail : "papadodimas@gmail.com",
                phone : "2101234567",
                zip_code : "73100",
                city : "Αθήνα",
                address_str : "Τζανακάκη",
                address_no : "93",

                afm : "12353253",
                brand_name : "Παιδικά προγράμματα Α.Ε.",
                iban : "GR1601100400000004012345678",

                is_locked : 0,
                can_create : 1
            }
        ]
    };
    showProviders();
}

function showProviders () {
    res = list ;
    var cont = "";
    if(res.success) {
        for(var i = 0; i < res.providers_list.length; i++){
            let temp = res.providers_list[i];
            let is_locked, to_lock;
            let can_create, to_allow;
            (temp["is_locked"] == 1) ? is_locked = "Ναι" : is_locked = "Όχι";
            (temp["is_locked"] == 1) ? to_lock = "Ξεκλείδωμα Χρήστη" : to_lock = "Κλείδωμα Χρήστη";
            (temp["can_create"] == 1) ? can_create = "Ναι" : can_create = "Όχι";
            (temp["can_create"] == 1) ? to_allow = "Ανάκληση δικαιώματος δημιουργίας δραστηριοτήτων" : to_allow = "Επαναφορά δικαιώματος δημιουργίας δραστηριοτήτων";
            cont += "    <tr>"
            + "   <td>"+temp["first_name"]+"</td>"
            + "   <td>"+temp["last_name"]+"</td>"
            + "   <td>"+temp["mail"]+"</td>"
            + "   <td>"+temp["phone"]+"</td>"
            + "   <td>"+temp["zip_code"]+"</td>"
            + "   <td>"+temp["city"]+"</td>"
            + "   <td>"+temp["address_str"]+"</td>"
            + "   <td>"+temp["address_no"]+"</td>"
            + "   <td>"+temp["afm"]+"</td>"
            + "   <td>"+temp["brand_name"]+"</td>"
            + "   <td>"+temp["iban"]+"</td>"
            + "   <td>"+is_locked+"</td>"
            + "   <td>"+can_create+"</td>"
            + " </tr>"
            + " <tr>"
            + "     <td colspan=\"2\"> <button type=\"button\" class=\"btn btn-info active\" onclick=\"javascript:changeUser("+temp["user_id"]+",1)\"> Επαναφορά Κωδικού </button> </td>"
            + "     <td colspan=\"2\"> <button type=\"button\" class=\"btn btn-info active\" onclick=\"javascript:changeUser("+temp["user_id"]+",2)\"> Διαγραφή Χρήστη </button> </td>"
            + "     <td colspan=\"2\"> <button type=\"button\" class=\"btn btn-info active\" onclick=\"javascript:changeUser("+temp["user_id"]+",3)\"> " + to_lock + " </button> </td>"
            + "     <td colspan=\"5\"> <button type=\"button\" class=\"btn btn-info active\" onclick=\"javascript:changeUser("+temp["user_id"]+",4)\"> " + to_allow + " </button> </td>"
            + " </tr>";
        }
        document.getElementById("providers_data").innerHTML = cont;
    }
    else{
        alert("An error has occurred.") ;
    }
}