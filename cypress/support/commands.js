// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { mount as cyMount } from "@cypress/vue";
import vuetify from "../../src/plugins/vuetify";

Cypress.Commands.add("mount", (MountedComponent, options) => {
  return cyMount(
    {
      vuetify,
      render(createElement) {
        return createElement("v-app", [createElement(MountedComponent)]);
      },
    },
    {
      ...options, // To override values for specific tests
    }
  );
});
