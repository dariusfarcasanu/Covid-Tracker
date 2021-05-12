window.onload = function () {
  getCovidStats();
};

const cases = document.getElementById('cases');
const deaths = document.getElementById('deaths');
const percent = document.getElementById('percent');
const country = document.getElementById('country');
const population = document.getElementById('population');
const update = document.getElementById('update');

function getCovidStats() {
  fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/212')
    .then(resp => resp.json())
    .then(data => {
      country.innerHTML = data.location.country;
      population.innerHTML = data.location.country_population.toLocaleString(
        'en'
      );
      cases.innerHTML = data.location.latest.confirmed.toLocaleString('en');
      update.innerHTML = data.location.last_updated.substr(0, 10);
      deaths.innerHTML = data.location.latest.deaths;
    })
    .catch(err => console.log(err));
}
