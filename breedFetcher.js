const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  if (breedName.length < 3) {
    console.log(`Invalid breed name: '${breedName}'`);
    return;
  }
  
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (error) {
      callback(error);
      return;
    }

    const data = JSON.parse(body);
    
    if (data[0] === undefined) {
      callback(`404: cat not found`);
      return;
    }
    
    let details = data[0].description;

    callback(null, details);
  });

};

module.exports = { fetchBreedDescription };