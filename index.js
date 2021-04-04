window.onload = function () {
  getCovidCountries();
};

const selectTag = document.querySelector('select');
const country = document.getElementById('country');
const cases = document.getElementById('cases');
const population = document.getElementById('population');
const recovered = document.getElementById('recovered');
const deaths = document.getElementById('deaths');
const today = document.getElementById('today');
//We created a function that gets the countries from the API
//and adds them to the select options

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

//Function to fetch the data from the external API and add the
//data to the interface

function getData() {
  fetch(`https://corona.lmao.ninja/v2/countries/${selectTag.value}`)
    .then(resp => resp.json())
    .then(data => {
      let countryData = data.country;
      let casesData = data.cases;
      let populationData = data.population;
      let recoveredData = data.recovered;
      let deathsData = data.deaths;
      let todayData = data.todayDeaths;

      country.innerHTML = countryData;
      cases.innerHTML = casesData.toLocaleString('en');
      population.innerHTML = populationData.toLocaleString('en');
      recovered.innerHTML = recoveredData.toLocaleString('en');
      deaths.innerHTML = deathsData.toLocaleString('en');
      today.innerHTML = todayData.toLocaleString('en');
    })

    .catch(err => console.log(err));
}
