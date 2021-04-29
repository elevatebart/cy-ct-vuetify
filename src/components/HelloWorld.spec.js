import HelloWorld from "./HelloWorld";

describe("<HelloWorld />", () => {
  it("should look OK", () => {
    cy.mount(HelloWorld);
  });
});
