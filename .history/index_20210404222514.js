// window.onload = function () {
//   getCovidStats();
// };

// const cases = document.getElementById('cases');
// const deaths = document.getElementById('deaths');
// const percent = document.getElementById('percent');
// const country = document.getElementById('country');
// const population = document.getElementById('population');
// const update = document.getElementById('update');

// function getCovidStats() {
//   fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/212')
//     .then(resp => resp.json())
//     .then(data => {
//       let country = data.location.country;
//       let population = data.location.country_population;
//       let cases = data.location.latest.confirmed;
//       let update = data.location.last_updated;
//       let deaths = data.location.latest.deaths;

//       document.getElementById('country').innerHTML = country;
//       document.getElementById(
//         'population'
//       ).innerHTML = population.toLocaleString('en');
//       document.getElementById('cases').innerHTML = cases.toLocaleString('en');
//       document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
//       document.getElementById('update').innerHTML = update.substr(0, 10);

//       document.getElementById('percent').innerHTML =
//         ((Number(deaths) / Number(cases)) * 100).toLocaleString('en', {
//           minimumFractionDigits: 2,
//           maximumFractionDigits: 2,
//         }) + '%';
//     })
//     .catch(err => console.log(err));

//   setTimeout(getCovidStats, 43200000); //It gets updated every 12 hours
// }

window.onload = function () {
  getCovidCountries();
  // getSelectData();
};

const selectTag = document.querySelector('select');
const cases = document.getElementById('cases');
const deaths = document.getElementById('deaths');
const percent = document.getElementById('percent');
const country = document.getElementById('country');
const population = document.getElementById('population');
const update = document.getElementById('update');

function getCovidCountries() {
  fetch('https://corona.lmao.ninja/v2/countries')
    .then(resp => resp.json())
    .then(data => {
      data.map(data => {
        let country = data.country;

        let option = document.createElement('option');
        option.value = country;
        option.text = country;
        selectTag.appendChild(option);
      });
    })
    .catch(err => console.log(err));
}

function getData() {
  // country.innerHTML = selectTag.value;
  fetch(`https://corona.lmao.ninja/v2/countries/${selectTag.value}`)
    .then(resp => resp.json())
    .then(data => {
      let country = data.country;
      let cases = data.cases;
      // let update = data.location.last_updated;
      // let deaths = data.location.latest.deaths;

      document.getElementById('country').innerHTML = country;

      document.getElementById('cases').innerHTML = cases.toLocaleString('en');
      //   document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
      //   document.getElementById('update').innerHTML = update.substr(0, 10);

      //   document.getElementById('percent').innerHTML =
      //     ((Number(deaths) / Number(cases)) * 100).toLocaleString('en', {
      //       minimumFractionDigits: 2,
      //       maximumFractionDigits: 2,
      //     }) + '%';
    })

    .catch(err => console.log(err));
}
