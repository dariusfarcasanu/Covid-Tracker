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
      population.innerHTML = data.location.country_population;
      cases.innerHTML = data.location.latest.confirmed;
      update.innerHTML = data.location.last_update;
    })
    .catch(err => console.log(err));
}
