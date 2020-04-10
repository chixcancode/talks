const fetch = require('node-fetch');

module.exports.covid19Status = async event => {
  let response = await getCovid19Status();
  
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };

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