const fetch = require('node-fetch');


exports.covid19Status = async (request, response) => {
  let httpresponse = await getCovid19Status();
  response.status(200).send(httpresponse);
  
};

async function getCovid19Status(){
  var requestOptions = {
    method: 'GET'
  };

  try {
    const response = await fetch("https://covidtracking.com/api/states", requestOptions);
    return response.json();
  }
  catch (err) {
    console.log('fetch failed', err);
  };



}