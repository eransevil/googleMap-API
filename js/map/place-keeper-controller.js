var gPlaces;
function getPosition() {
  if (!navigator.geolocation) {
    alert('HTML5 Geolocation is not supported in your browser.');
    return;
  }

  // One shot position getting or continus watch
  navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
  //   navigator.geolocation.watchPosition(showLocation, handleLocationError);
}
// initMap()
function initMap(lat = 29.558, lng = 34.9482) {
  geocoder = new google.maps.Geocoder();

  var elMap = document.querySelector('#map');
  var options = {
    center: { lat, lng },
    zoom: 12,
  };

  map = new google.maps.Map(elMap, options);

  var marker = new google.maps.Marker({
    position: { lat, lng },
    map,
    title: 'Hello World!',
  });

  marker.addListener('click', () => {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });

  map.addListener('click', (e) => {
    placeMarkerAndPanTo(e.latLng, map);
  });
  function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
    });

    map.panTo(latLng);
    gPlaces = loadFromStorage(PLACES_KEY);
    if (!gPlaces || !gPlaces.length) {
      gPlaces = [];
      let placeName = 'Eilat';
      gPlaces.push({ latLng, placeName });
      savePlacesToStorage(gPlaces);
      gPlaces = loadFromStorage(PLACES_KEY);
      renderPlaces();
    } else {
      console.log(gPlaces);
      var placeName = prompt('place name?');
      gPlaces.push({ latLng, placeName });
      console.log(gPlaces);
      savePlacesToStorage(gPlaces);
      renderPlaces();
    }
  }
}

function showLocation(position) {
  var options = {
    center: { lat: position.coords.latitude, lng: position.coords.longitude },
    zoom: 12,
  };

  initMap(position.coords.latitude, position.coords.longitude);
}

function handleLocationError(error) {
  var locationError = document.getElementById('locationError');

  switch (error.code) {
    case 0:
      locationError.innerHTML =
        'There was an error while retrieving your location: ' + error.message;
      break;
    case 1:
      locationError.innerHTML =
        "The user didn't allow this page to retrieve a location.";
      break;
    case 2:
      locationError.innerHTML =
        'The browser was unable to determine your location: ' + error.message;
      break;
    case 3:
      locationError.innerHTML =
        'The browser timed out before retrieving the location.';
      break;
  }
}

function center() {
  getPosition();
}

function renderPlaces() {
  gPlaces = loadFromStorage(PLACES_KEY);

  //   gPlaces = loadPlacesFromStorage(gPlaces);
  console.log(gPlaces.length);
  var strHTML = '';
  for (let i = 0; i < gPlaces.length; i++) {
    console.log('gPlaces[i].latLng', gPlaces[i].latLng);
    strHTML += `<tr>  <td> ${gPlaces[i].latLng.lat} </td> <td> ${gPlaces[i].latLng.lng} </td>  <td> ${gPlaces[i].placeName} </td> </tr> `;
  }
  document.querySelector('.table-input').innerHTML = strHTML;
}
