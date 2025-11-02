const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Integrate MochaAwesome reporter
      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
    pageLoadTimeout: 60000,
    chromeWebSecurity: false,
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Cypress Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
});