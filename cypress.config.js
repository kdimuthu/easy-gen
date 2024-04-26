const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: "task.html",
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
      pageLoadTimeout: 60000;
    },
  },
});
