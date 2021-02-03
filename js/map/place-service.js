const PLACES_KEY = 'placesDB';

function savePlacesToStorage(gPlaces) {
  console.log(gPlaces);
  saveToStorage(PLACES_KEY, gPlaces);
}

function loadPlacesFromStorage(gPlaces) {
  var places = loadFromStorage(PLACES_KEY);
  return places;
}
