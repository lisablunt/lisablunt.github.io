L.mapbox.accessToken = 'pk.eyJ1IjoiYWx1bHNoIiwiYSI6ImY0NDBjYTQ1NjU4OGJmMDFiMWQ1Y2RmYjRlMGI1ZjIzIn0.pngboKEPsfuC4j54XDT3VA';

var map = L.mapbox.map('map-init', 'mapbox.streets', { zoomControl: false })
    .setView([38.898, -77.043], 3);

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
        'description': '1980s - Present<br>My birthplace and current city.'
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
        'description': 'Spring 2009<br>Graduated from Brown University.'
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
        'title': 'New York, NY',
        'marker-symbol': 'library',
        'description': 'Summer 2007<br>Interned with the books division of Sports Illustrated.'
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
        'description': 'Summer 2008<br>Interned with the Publicity and Marketing departments of Yale University Press.'
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
        'description': 'Summer 2015<br>Attended the <a href="https://chimehack2.devpost.com/" target="_blank" rel="noopener">CHIMEHACK 2</a> hackathon at<br>Twitter HQ in SF.' 
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -121.4944,
          38.5816
        ]
      }
    },
      /* Begin Canadian cities */
    {
      'type': 'Feature',
      'properties': {
        'title': 'Toronto, ON, CAN',
        'marker-symbol': 'suitcase',
        'description': '1988<br>My very first international trip.'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -79.3832,
          43.6532
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'title': 'Montréal, QC, CAN',
        'marker-symbol': 'suitcase',
        'description': '1996<br>Visited as part of a penpal exchange with a local elementary school.'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -73.5673,
          45.5017
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'title': 'Québec, QC, CAN',
        'marker-symbol': 'suitcase',
        'description': '1996<br>Visited as part of a penpal exchange with a Montréal elementary school.'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -71.2080,
          46.8139
        ]
      }
    },
   /* End Canadian cities */
    {
      'type': 'Feature',
      'properties': {
        'title': 'London, UK',
        'marker-symbol': 'suitcase',
        'description': 'Winter 2015<br>Waved hello to the Queen, saw Big Ben, and visited nearby Stonehenge.'
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
        'description': 'Winter 2015<br>Ice skated at the Eiffel Tower, visited the Louvre, and ate too many macarons.'
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
        'title': 'Amsterdam, NL',
        'marker-symbol': 'suitcase',
        'description': 'Winter 2015<br>The people here were very nice and accommodating to a sick traveller.'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          4.899431,
          52.379189
        ]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'title': 'Hamilton, Bermuda',
        'marker-symbol': 'suitcase',
        'description': ' Summer 2013<br>Pastel houses, pink sand beaches, gorgeous sunsets... take me back!'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -64.790337,
          32.299507
]
      }
    }
  ]
};

var placesLayer = L.mapbox.featureLayer().setGeoJSON(markers).addTo(map);

loadPlaces(markers);
