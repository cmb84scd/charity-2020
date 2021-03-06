function PairingsMap(props) {
  /* For more information please visit: https://developers.google.com/maps/documentation
  Here some resource helped me to make api works;
  DirectionsServices: https://developers.google.com/maps/documentation/javascript/directions
  Drawing Marker: https://developers.google.com/maps/documentation/javascript/examples/icon-complex
  Drawing Marker:https://developers.google.com/chart/infographics/docs/dynamic_icons?csw=1#plain_pin
  Code samples: https://developers.google.com/maps/documentation/javascript/examples
  Map styling: https://mapstyle.withgoogle.com/
  */
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 12,
    center: { lat: 51.497309, lng: -0.147165 },
    fullscreenControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: true,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ecdfbb"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#523735"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#c9b2a6"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#dcd2be"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ae9e90"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#93817c"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ff955c"
          },
          {
            "saturation": -20
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#447530"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fdfcf8"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#eec170"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f8c967"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#e67d37"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e67d37"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e98d58"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#db8555"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#806b63"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8f7d77"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a1ddb6"
          },
          {
            "saturation": 5
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#92998d"
          }
        ]
      }
    ]
  });
  var icons = {
    start: new google.maps.MarkerImage(),
    end: new google.maps.MarkerImage(),
  };

  var colorHexPalet = ["769b17", "519cc9", "dfd974", "cb4b99", "ff9d78"];
  var colorStringPalet = ["green", "	blue", "yellow", "pink", "orange"];

  props.pairs.forEach((pair, i) => {
    var startMarker = (position, icon, title) => {
      new google.maps.Marker({
        map: map,
        position: position,
        icon: {
          url: `http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=car|${
            colorHexPalet[i % colorHexPalet.length]
          }`,
          labelOrigin: new google.maps.Point(10, -4),
        },
        label: {
          text: title,
          color: colorStringPalet[i % colorStringPalet.length],
          fontWeight: "bold",
        },
      });
    };

    var endMarker = (position, icon, title) => {
      new google.maps.Marker({
        map: map,
        position: position,
        icon: {
          url: `http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=home|${
            colorHexPalet[i % colorHexPalet.length]
          }`,
          labelOrigin: new google.maps.Point(10, -4),
        },
        label: {
          text: title,
          color: colorStringPalet[i % colorStringPalet.length],
          fontWeight: "bold",
        },
      });
    };

    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer({
      polylineOptions: {
        strokeColor: colorStringPalet[i % colorStringPalet.length],
      },
      suppressMarkers: true,
    });
    directionsRenderer.setMap(map);

    var request = {
      origin: pair.route.routes[0].legs[0].start_location,
      destination: pair.route.routes[0].legs[0].end_location,
      travelMode: "DRIVING",
    };
    directionsService.route(request, function (response, status) {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
        startMarker(
          pair.route.routes[0].legs[0].end_location,
          icons.start,
          pair.driver
        );

        endMarker(
          pair.route.routes[0].legs[0].start_location,
          icons.end,
          pair.guest
        );
      } else {
        window.alert("Directions request failed due to " + status);
      }
    });
  });

  return null;
}
