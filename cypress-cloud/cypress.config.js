const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xue8q1",
  e2e: {
    experimentalPromptCommand: true,
    baseUrl: 'https://demoblaze.com',
  },
});
