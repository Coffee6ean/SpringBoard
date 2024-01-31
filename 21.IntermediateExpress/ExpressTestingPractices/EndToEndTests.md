# End to End Tests -

- End-to-end testing tests an application’s flow from start to end.
- The purpose of E2E testing is to simulate an entire real user scenario.

### Pros of E2E tests
- You are also going to find a lot more user-impacting bugs up front, because you are working directly with the application at the user’s perspective.
- You don’t have to be as familiar with the specific implementation, or even how coding works to write automated UI tests. Many tools allow you to just click record, perform some actions, and save a script.

### Cons of E2E tests
- E2E tests are not nearly as maintainable as unit tests. They break easily when one feature changes.
- They are much more time consuming to write and can be handled by QA teams.

### Common E2E Testing tools
- Selenium
- Cypress

### An example with Cypress - Meme Generator!
_demo/cypress-demo/cypress/integration/meme.spec.js_
```js
describe("Meme Generator", function() {
  beforeEach(function() {
    cy.visit("/index.html", { timeout: 5000 });
  });

  it("loads correctly", function() {
    cy.get("#meme-form").should("exist");
  });

  it("adds a meme when the form is submitted", function() {
    cy.get(".meme").should("not.exist");
    addMeme();
    cy.get(".meme").should("exist");
  });

  it("removes a meme when the meme is clicked", function() {
    addMeme();
    cy.get(".meme").click();
    cy.get(".meme").should("not.exist");
  });
});
```

### Basic Cypress Setup
```bash
$ npm i --save-dev cypress
```

In ***package.json***:
```json
"scripts": {
  "cypress:open": "cypress open"
},
```

For more, check out the [docs](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html)!
