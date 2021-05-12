window.onload = function () {};

function getCovidStats() {
  fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations');
}
