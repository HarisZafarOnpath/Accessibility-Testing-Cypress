const {defineConfig} = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;


module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://onpath.myjourney.com',
        specPattern: [
            'cypress/e2e/features/Participant/**/*.feature',
            'cypress/e2e/features/Professional/**/*.feature',
        ], // Update the specPattern to match your feature file location
        defaultCommandTimeout: 35000,
        pageLoadTimeout: 90000,
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber({
                resolveStepDefinition(definition) {
                    return definition;
                },
                featureName: "___GLOBAL_EXECUTION___",
                nonGlobalStepDefinitions: false,
                stepDefinitions: [
                    'cypress/support/step-definitions/**/*.js',
                    'cypress/support/step-definitions/Participant/**/*.js',
                    'cypress/support/step-definitions/Professional/**/*.js',
                ],
            }));
        }
    }
});
