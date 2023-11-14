// breedFetcher.js

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    if (data.length > 0) {
      const description = data[0].description;
      callback(null, description);
    } else {
      callback(`Breed "${breedName}" not found.`, null);
    }
  });
};

module.exports = { fetchBreedDescription };

