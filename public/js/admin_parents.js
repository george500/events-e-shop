var list ;
(function(window, document, undefined) {

    window.onload = init ;

    function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        changeNavbar() ;
        loadParents() ;
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
        can_buy : 1
    }
    if (result.success) {
        if (action == 1) {
            alert("Η επαναφορά του κωδικού του χρήστη ήταν επιτυχής.") ;
        }
        else if (action == 2) {
            for(var i=0; i<list.parent_list.length; i++) {
                if (list.parent_list[i].user_id == result.user_id) {
                    //console.log(list.parent_list[i].user_id+result.user_id) ;
                    list.parent_list.splice(i,1) ;
                    showParents() ;
                    alert("Ο χρήστης διεγράφη με επιτυχία.") ;
                    break ;
                }
            }
        }
        else if (action == 3) {
            for(var i=0; i<list.parent_list.length; i++) {
                if (list.parent_list[i].user_id == result.user_id) {
                    list.parent_list[i].is_locked = result.is_locked ;
                    list.parent_list[i].can_buy = result.can_buy ;
                    showParents() ;
                    alert("Η κατάσταση κλειδώματος του χρήστη άλλαξε με επιτυχία.") ;
                    break ;
                }
            }
        }
        else if (action == 4) {
            for(var i=0; i<list.parent_list.length; i++) {
                    let temp = list.parent_list[i];
                    if (list.parent_list[i].user_id == result.user_id) {
                        list.parent_list[i].is_locked = result.is_locked ;
                        list.parent_list[i].can_buy = result.can_buy ;
                        showParents() ;
                        alert("Τα διακαιώματα του χρήστη άλλαξαν με επιτυχία.") ;
                        break ;
                }
            }
        }
    }
    else (
        alert("Υπήρξε κάποιο σφάλμα, η διαδικασία δεν ολοκληρώθηκε.")
    )
}

function loadParents () {
    var sessionID = getCookie("session_id") ;
    var results;
    /**/
    /*var form_data = {session_id:sessionID} ;
    $.ajax({
        url: '/getParents',
        type: 'POST',
        data: form_data,
        cache: false,
        success: function(returnjson){
            list = JSON.parse(returnjson) ;
            if (data.success) {
                showParents(data) ;
            }
        }
    });*/
    /*$.post("/getParents", {session_id:sessionID},
        function(returnjson, status){
            list = JSON.parse(returnjson) ;
            if (data.success) {
                showParents(data) ;
            }
    }) ;*/
    /**/
    list = {
        success: true,
        parent_list : [
            {
                user_id : 5,
                first_name : "Παναγιώτης",
                last_name : "Διαμαντάκης",
                mail : "mail@mail.com",
                phone : "2101234567",
                zip_code : "73100",
                city : "Χανιά",
                address_str : "Τζανακάκη",
                address_no : "93",
                is_locked : 0,
                can_buy : 1
            },
            {
                user_id : 4,
                first_name : "James",
                last_name : "Green",
                mail : "mjgr@mdo.gr",
                phone : "2107777777",
                zip_code : "14100",
                city : "Αθηνα",
                address_str : "Πανεπιστημίου",
                address_no : "24",
                is_locked : 1,
                can_buy : 0
            },
            {
                user_id : 2,
                first_name : "Γεώργιος",
                last_name : "Παπαδόδημας",
                mail : "georgepap@gmail.com",
                phone : "2109659854",
                zip_code : "15451",
                city : "Αθήνα",
                address_str : "Δελμησού",
                address_no : "2",
                is_locked : 0,
                can_buy : 1
            },
            {
                user_id : 2,
                first_name : "Νικόλαος",
                last_name : "Γλόμπος",
                mail : "nick.globos@gmail.com",
                phone : "2109858737",
                zip_code : "15452",
                city : "Αθήνα",
                address_str : "Διγενή",
                address_no : "3",
                is_locked : 0,
                can_buy : 1
            }
        ]
    };
    showParents();
}

function showParents () {
    res = list ;
    if(res.success)  {
        var cont = "";
        for(var i=0; i<res.parent_list.length; i++) {
            let temp = res.parent_list[i];
            let is_locked, to_lock;
            let can_buy, to_allow;
            (temp["is_locked"] == 1) ? is_locked = "Ναι" : is_locked = "Όχι";
            (temp["is_locked"] == 1) ? to_lock = "Ξεκλείδωμα Χρήστη" : to_lock = "Κλείδωμα Χρήστη";
            (temp["can_buy"] == 1) ? can_buy = "Ναι" : can_buy = "Όχι";
            (temp["can_buy"] == 1) ? to_allow = "Ανάκληση δικαιώματος αγοράς" : to_allow = "Επαναφορά δικαιώματος αγοράς";
            cont += "<tr>"
                + "     <td>"+temp["first_name"]+"</td>"
                + "     <td>"+temp["last_name"]+"</td>"
                + "     <td>"+temp["mail"]+"</td>"
                + "     <td>"+temp["phone"]+"</td>"
                + "     <td>"+temp["zip_code"]+"</td>"
                + "     <td>"+temp["city"]+"</td>"
                + "     <td>"+temp["address_str"]+"</td>"
                + "     <td>"+temp["address_no"]+"</td>"
                + "     <td>"+is_locked+"</td>"
                + "     <td>"+can_buy+"</td>"
                + " </tr>"
                + " <tr>"
                + "     <td colspan=\"2\"> <button type=\"button\" class=\"btn btn-info active\" onclick=\"javascript:changeUser("+temp["user_id"]+",1)\"> Επαναφορά Κωδικού </button> </td>"
                + "     <td colspan=\"2\"> <button type=\"button\" class=\"btn btn-info active\" onclick=\"javascript:changeUser("+temp["user_id"]+",2)\"> Διαγραφή Χρήστη </button> </td>"
                + "     <td colspan=\"2\"> <button type=\"button\" class=\"btn btn-info active\" onclick=\"javascript:changeUser("+temp["user_id"]+",3)\"> " + to_lock + " </button> </td>"
                + "     <td colspan=\"3\"> <button type=\"button\" class=\"btn btn-info active\" onclick=\"javascript:changeUser("+temp["user_id"]+",4)\"> " + to_allow + " </button> </td>"
                + " </tr>" ;
         }
         document.getElementById("parents_data").innerHTML = cont;
     }
     else{
         alert("An error has occurred.") ;
     }
}