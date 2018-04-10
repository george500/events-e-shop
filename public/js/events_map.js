var marker ;

var chosen_place = {
    latitude : 37.98,
    longtitude : 23.72
}
var event_lat, event_long;
event_lat = null ;
event_long = null ;

function initMap() {
    var maxID = 3;
    var image_areHere = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var info_areHere = new google.maps.InfoWindow({
          content: 'Επιλεγμένο σημείο.'
        });
    var info_goThere = new google.maps.InfoWindow({
          content: 'Πάτε εδώ!'
        });

    // longtitude = parseFloat(document.getElementById("tableSensorLon1").innerHTML) ;
    // latitude = parseFloat(document.getElementById("tableSensorLat1").innerHTML) ;
    latitude = 37.98;
    longtitude = 23.72 ;
    var latLng = new google.maps.LatLng(chosen_place["latitude"],chosen_place["longtitude"]);
    map = new google.maps.Map(document.getElementById('map'), {
        // zoom: 2,
        zoom: 8,
        center: new google.maps.LatLng(chosen_place["latitude"], chosen_place["longtitude"])
    });
    marker = new google.maps.Marker({
        position: latLng,
        icon: image_areHere,
        draggable: true,
        map: map,
        title: 'sensor'+ 1
    });
    var info_areHere = new google.maps.InfoWindow({
            content: 'Επιλεγμένη τοποθεσία.'
        });

    marker.addListener('click', function() {
        info_areHere.open(map, marker);
    });
    google.maps.event.addListener(marker, 'dragend', function(evt){
        event_lat = evt.latLng.lat().toFixed(3);
        event_long = evt.latLng.lng().toFixed(3);
        console.log("event_lat = " + event_lat);
        console.log("event_long = " + event_long);
        //document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + event_lat + ' Current Lng: ' + event_long + '</p>';
    });

    google.maps.event.addListener(marker, 'dragstart', function(evt){
        //document.getElementById('current').innerHTML = '<p>Currently dragging marker...</p>';
    });
}

function showResultsOnMap(results) {
    map = new google.maps.Map(document.getElementById('map1'), {
        // zoom: 2,
        zoom: 8,
        center: new google.maps.LatLng(chosen_place["latitude"], chosen_place["longtitude"])
    });
    // Loop through the results array and place a marker for each
    // set of coordinates.

    // for (var i = 0; i <= maxID-2; i++) {
        for (var i = 0; i < results.results.length; i++) {
            var temp = results.results[i];

            let latLng = new google.maps.LatLng(temp["latitude"],temp["longtitude"]);
            let event_latLng = new google.maps.LatLng(event_lat, event_long);
            //let cont_messege = 'Πάτε εδώ!'+i;
            // let cont_messege = document.getElementById("res"+(i-1)).innerHTML;
            let info_goThere = new google.maps.InfoWindow({
                    //content: cont_messege+"<p>"+temp["name"]+"</br>"+temp["type"]+"</p>"+"<p>"+"Distance :"+(google.maps.geometry.spherical.computeDistanceBetween ((marker.getPosition()), latLng)/1000).toFixed(3)+"Km"+"</p>"
                    content: "<p>"+temp["name"]+"</br>"+temp["type"]+"</p>"+"<p>"+"Distance :"+(google.maps.geometry.spherical.computeDistanceBetween ((marker.getPosition()), latLng)/1000).toFixed(3)+"Km"+"</p>"
                });
            let marker2 = new google.maps.Marker({
                position: latLng,
                map: map,
                title: 'sensor'+ i
            }) ;
            marker2.addListener('click', function() {
                info_goThere.open(map, marker2);
            });
        }
        // document.getElementById("hideMapButton").style.visibility="visible" ;
        document.getElementById("map").style.display="block" ;
}