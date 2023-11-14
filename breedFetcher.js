// breedFetcher.js

const request = require('request');

// Ensure the request library loads without errors
console.log('Request library loaded successfully!');
// breedFetcher.js

const breedName = process.argv[2];

const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const data = JSON.parse(body);
  console.log(data);

  if (data.length > 0) {
    const description = data[0].description;
    console.log(description);
  } else {
    console.log(`Breed "${breedName}" not found.`);
  }
});
