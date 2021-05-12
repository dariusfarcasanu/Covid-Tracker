window.onload = function () {
  getCovidStats();
};

const cases = document.getElementById('cases');
const deaths=document.getElementById('deaths');
const percent=document.getElementById('percent');
const 

function getCovidStats() {
  fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/212')
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
