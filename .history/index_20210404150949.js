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
      let country = data.location.country;
      let population = data.location.country_population.toLocaleString('en');
      let cases = data.location.latest.confirmed.toLocaleString('en');
      let update = data.location.last_updated.substr(0, 10);
      let deaths = data.location.latest.deaths.toLocaleString('en');

      document.getElementById('country') = country;
    })
    .catch(err => console.log(err));
}
