var latitude, longitude ;

function initMap(res) {
    let temp = res.event_info ;
    //console.log(temp["longitude"]);
    latitude   = temp["latitude"] ;
    longitude = temp["longitude"] ;
    let cont_messege = "<p>"+temp["event_name"]+"</p>"
    cont_messege += "<p>"+temp["description"]+"</p>"
    
    //From https://developers.google.com/maps/documentation/javascript/adding-a-google-map
    var uluru = {lat: latitude, lng: longitude};
    //var uluru = {lat: 37.9838, lng: 23.7275};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru
    });
    let info_goThere = new google.maps.InfoWindow({
            content: cont_messege
        });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
    marker.addListener('click', function() {
        info_goThere.open(map, marker);
    });
}