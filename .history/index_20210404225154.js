window.onload = function () {
  getCovidCountries();
};

const selectTag = document.querySelector('select');

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
      let country = data.country;
      let casesData = data.cases;
      let populationData = data.population;
      let recoveredData = data.recovered;
      let deathsData = data.deaths;
      let todayData = data.todayDeaths;

      document.getElementById('country').innerHTML = country;
      document.getElementById('cases').innerHTML = casesData.toLocaleString(
        'en'
      );
      document.getElementById(
        'population'
      ).innerHTML = populationData.toLocaleString('en');
      document.getElementById(
        'recovered'
      ).innerHTML = recoveredData.toLocaleString('en');
      document.getElementById('deaths').innerHTML = deathsData.toLocaleString(
        'en'
      );
      document.getElementById('today').innerHTML = todayData.toLocaleString(
        'en'
      );
    })

    .catch(err => console.log(err));
}
