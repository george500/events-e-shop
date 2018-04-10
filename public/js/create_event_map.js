var latitude, longtitude ;
latitude = 37.98 ;
longtitude = 23.72 ;

var event_lat, event_long;
event_lat = null ;
event_long = null ;


function initMap() {
    //console.log("Hello.") ;
    //console.log(event_lat, event_long) ;
    //From https://developers.google.com/maps/documentation/javascript/adding-a-google-map
    var uluru = {lat: latitude, lng: longtitude};
    //var uluru = {lat: 37.9838, lng: 23.7275};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom:12,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        draggable: true,
        map: map
    });
    google.maps.event.addListener(marker, 'dragend', function(evt){
        event_lat = evt.latLng.lat().toFixed(3);
        event_long = evt.latLng.lng().toFixed(3);
        //console.log("event_lat = "+ event_lat);
        //console.log("event_long = "+ event_long);
        //document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + event_lat + ' Current Lng: ' + event_long + '</p>';
    });

    google.maps.event.addListener(marker, 'dragstart', function(evt){
        //document.getElementById('current').innerHTML = '<p>Currently dragging marker...</p>';

    });
// else if(onePoint==2 && maxID>=1) {
//     longtitude = parseFloat(document.getElementById("tableSensorLon1").innerHTML) ;
//     latitude = parseFloat(document.getElementById("tableSensorLat1").innerHTML) ;
//     var latLng = new google.maps.LatLng(latitude,longtitude);
//     map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 2,
//         center: new google.maps.LatLng(longtitude,latitude),
//         mapTypeId: 'terrain'
//     });
//     var marker = new google.maps.Marker({
//         position: latLng,
//         map: map,
//         title: 'sensor'+ 1
//     });
//
// // Loop through the results array and place a marker for each
// // set of coordinates.
// for (var i = 2; i <= maxID; i++) {
//     longtitude = parseFloat(document.getElementById("tableSensorLon"+i).innerHTML) ;
//     latitude = parseFloat(document.getElementById("tableSensorLat"+i).innerHTML) ;
//     var latLng = new google.maps.LatLng(latitude,longtitude);
//     var marker = new google.maps.Marker({
//         position: latLng,
//         map: map,
//         title: 'sensor'+ i
//     }) ;
// }
//     document.getElementById("hideMapButton").style.visibility="visible" ;
//     document.getElementById("map").style.display="block" ;
// }
}