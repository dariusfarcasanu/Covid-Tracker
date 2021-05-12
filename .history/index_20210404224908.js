window.onload = function () {
  getCovidCountries();
};

const selectTag = document.querySelector('select');

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
  fetch(`https://corona.lmao.ninja/v2/countries/${selectTag.value}`)
    .then(resp => resp.json())
    .then(data => {
      let country = data.country;

      let cases = data.cases;
      let population = data.population;
      let recovered = data.recovered;
      let deaths = data.deaths;
      let today = data.todayDeaths;

      document.getElementById('country').innerHTML = country;
      document.getElementById('cases').innerHTML = cases.toLocaleString('en');
      document.getElementById(
        'population'
      ).innerHTML = population.toLocaleString('en');
      document.getElementById('recovered').innerHTML = recovered.toLocaleString(
        'en'
      );
      document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
      document.getElementById('today').innerHTML = today.toLocaleString('en');
    })

    .catch(err => console.log(err));
}
