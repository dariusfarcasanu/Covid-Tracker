window.onload = function () {
  getCovidStats();
};

function getCovidStats() {
  fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/225')
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
