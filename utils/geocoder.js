const NodeGeocoder = require('node-geocoder')

const options = {
    provider: process.env.GEOCODER_PROVIDER,
    httpAapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;