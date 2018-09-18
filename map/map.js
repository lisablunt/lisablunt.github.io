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
        'marker-symbol': 'star',
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
        'marker-symbol': 'college',
        'description': '2003 - 2008<br>I went to university here.'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -71.4128,
          41.8240 
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'title': 'New York. NY',
        'marker-symbol': 'library',
        'description': 'Summer 2007<br>Internship with the books division of Sports Illustrated.'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -74.0060,
          40.7128
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'title': 'New Haven, CT',
        'marker-symbol': 'library',
        'description': 'Summer 2008<br>Internship with Yale University Press.'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -72.9279,
          41.3083
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'title': 'Sacramento, CA',
        'marker-symbol': 'pitch',
        'description': 'Summer 2015<br>I lived here for six weeks.' 
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -121.4944,
          38.5816
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'title': 'London, UK',
        'marker-symbol': 'suitcase',
        'description': 'Winter 2015<br>I travelled here.'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -0.1278,
          51.5074
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'title': 'Paris, FR',
        'marker-symbol': 'suitcase',
        'description': 'Winter 2015<br>I travelled here.'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          2.3522,
          48.8566
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'title': 'Amsterdam, Netherlands',
        'marker-symbol': 'suitcase',
        'description': 'Winter 2015<br>I travelled here.'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -52.3680,
          4.9036 
]
      }
    }
  ]
};

var placesLayer = L.mapbox.featureLayer().setGeoJSON(markers).addTo(map);

loadPlaces(markers);
