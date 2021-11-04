const request = require('request');
const arg = process.argv.slice(2);

// allow user to request specific breed

const breedFetcher = (breed) => {

  if (breed.length < 3) {
    console.log(`Invalid breed name: '${breed}'`);
    return;
  }
  
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    
    if (error) {
      console.log(error);
      return;
    }
    
    const data = JSON.parse(body);
    
    if (data[0] === undefined) {
      console.log(`404: ${breed} does not exist.`);
      return;
    }

    console.log(data[0].description);
  });

};


breedFetcher(arg[0]);