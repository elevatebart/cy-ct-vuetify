import Button from "./Button";

describe("<Button />", () => {
  it("should look OK", () => {
    cy.mount(Button, {
      slots: {
        default: "coco",
      },
    });
    cy.get("button");
  });
});
