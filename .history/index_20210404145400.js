window.onload = function () {
  getCovidStats();
};

const cases = document.getElementById('cases');

function getCovidStats() {
  fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/212')
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
