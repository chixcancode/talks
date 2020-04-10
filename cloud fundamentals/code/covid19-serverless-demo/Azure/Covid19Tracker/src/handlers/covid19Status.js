const fetch = require('node-fetch');

module.exports.covid19Status = async function(context, req) {
  let response = await getCovid19Status();
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: "hello"
  };
  
};


async function getCovid19Status(){
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://covidtracking.com/api/states", requestOptions);
    return response.json();
  }
  catch (err) {
    console.log('fetch failed', err);
  };
