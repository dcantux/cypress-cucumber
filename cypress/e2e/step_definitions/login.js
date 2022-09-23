// cypress/e2e/duckduckgo.ts
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";


Given("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

When("I should see a search bar", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
});