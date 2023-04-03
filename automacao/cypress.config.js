const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:8080/',
    viewportWidth: 1080,
    viewportHeight: 980,
    experimentalRunAllSpecs: true,
    specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
  },
  env: {
    apiUrl: "http://localhost:8080/api/v1",
  },
});
