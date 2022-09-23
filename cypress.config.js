const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

const report = require("multiple-cucumber-html-reporter");


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);

      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    video: false,
    specPattern: "cypress/e2e/features/*.feature",
    stepDefinitions: "cypress/e2e/step_definitions/",
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
  },
});
