const name = 'real madrid';
fetch("https://api-football-v1.p.rapidapi.com/v2/timezone", {
"method": "GET",
"headers": {
"x-rapidapi-key": "SIGN-UP-FOR-KEY",
"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
}
})
.then(response => {
console.log(response);
})
.catch(err => {
console.error(err);
});

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
  params: {name: name},
  headers: {
    'X-RapidAPI-Key': '8a236df81amshe4a036b9654f121p17290ajsnf63c8e3f2adb',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});