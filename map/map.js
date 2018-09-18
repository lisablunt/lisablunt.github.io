L.mapbox.accessToken = 'pk.eyJ1IjoiYWx1bHNoIiwiYSI6ImY0NDBjYTQ1NjU4OGJmMDFiMWQ1Y2RmYjRlMGI1ZjIzIn0.pngboKEPsfuC4j54XDT3VA';

var map = L.mapbox.map('map-init', 'mapbox.streets', { zoomControl: false })
    .setView([38.898, -77.043], 2);

new L.Control.Zoom({ position: 'topright' }).addTo(map);

function fly(lat, long, title) {

    map.setView([lat, long], 7);

    placesLayer.eachLayer(function(marker){

    if(marker.feature.properties.title === title) {

        marker.openPopup();

    }

})

}

function createEventListeners(index, lat, long, title) {

    var placeClass = 'place-' + index;
    
    document.getElementById(placeClass).addEventListener('click', function() {

      fly(lat, long, title);

    }, false);

}

function loadPlaces(data){

    var places = data.features;

    for (var i = 0; i < places.length; i++) {

        var place = places[i];

        var lat = place.geometry.coordinates[1];
        var long = place.geometry.coordinates[0];
        var title = place.properties.title;

        createEventListeners(i, lat, long, title);

    }

}

var markers = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'properties': {
        'title': 'Washington, DC',
        'marker-symbol': 'heliport',
        'description': '1980s - Present<br>I was born and raised here.'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -77.0366,
          38.895
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'title': 'Providence, RI',
        'marker-symbol': 'heliport',
        'description': '2003 - 2008<br>I went to university here.'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -41.8240,
          71.4128
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'title': 'New York. NY',
        'marker-symbol': 'park',
        'description': 'Summer 2007<br>Internship with the books division of Sports Illustrated.'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -40.7128,
          74.0060
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'title': 'New Haven, CT',
        'marker-symbol': 'bicycle',
        'description': 'Summer 2008<br>Internship with Yale University Press.'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -41.3083,
          72.9279
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'title': 'Sacramento, CA',
        'marker-symbol': 'school',
        'description': 'Summer 2015<br>I attended a Twitter hackathon here.'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -38.5816,
          121.4944
]
      }
    }
  ]
};

var placesLayer = L.mapbox.featureLayer().setGeoJSON(markers).addTo(map);

loadPlaces(markers);
