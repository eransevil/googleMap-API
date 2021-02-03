console.log('placeService');

function setBackground() {
  let color = loadFromStorage(COLOR_KEY);
  document.body.style.backgroundColor = color;
}
