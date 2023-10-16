const { defineConfig } = require("cypress");
// import {
//   addCucumberPreprocessorPlugin,
// } from "@badeball/cypress-cucumber-preprocessor";
const cucumber = require("cypress-cucumber-preprocessor").default;

// const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const nodePolyfills =   require("@esbuild-plugins/node-modules-polyfill").NodeModulesPolyfillPlugin;
//  const addCucumberPreprocessorPlugin =
//    require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;


const { Client } = require('pg')

const connectDB = async (querys) => {

  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "Emp",
    password: "postgres",
    port: "5432"
  })

  await client.connect()
  console.log("NOTE===>DB Connection Established");
  return await client.query(querys);
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      on("file:preprocessor", cucumber());
      // implement node event listeners here
      // on(
      //   "file:preprocessor",
      //   createBundler({
      //     plugins: [nodePolyfills(), createEsbuildPlugin(config)],
      //   })
      // );

      on('task', {
        SqlQueryPS: (query) => {
          return connectDB(query);
        }
      })
    },
    specPattern: "**/*.feature"  
  },
});
