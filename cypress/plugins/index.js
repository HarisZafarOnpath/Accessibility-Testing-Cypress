const cucumber = require('cypress-cucumber-preprocessor').default;
require('./commands'); // Require the custom commands from commands.js


module.exports = (on, config) => {
  on('file:preprocessor', cucumber());

  return config;
};
