const assert = require('chai').assert;
const { fetchBreedDescription } = require('../breedFetcher.js');

describe('#fetchBreedDescription', () => {

  it('provides, via callback, breed details for the specified breed breed', (done) => {
    fetchBreedDescription('sib', (error, description) => {
      const expected = `The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. `
      assert.equal(description, expected);
      done();
    });
  });
  
  it('returns undefined if breed doesn\'t exists', (done) => {
    fetchBreedDescription('bruhmode', (error, description) => {
      const expected = undefined;
      assert.equal(description, expected);
      done();
    });
  });
  
});