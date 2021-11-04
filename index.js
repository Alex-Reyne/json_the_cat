let { fetchBreedDescription } = require('./breedFetcher.js');
const arg = process.argv.slice(2);

fetchBreedDescription(arg[0], (error, description) => {
  if (error) {
    console.log(error);
    return;
  }
  
  return description;
});