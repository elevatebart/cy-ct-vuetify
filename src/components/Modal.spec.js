import Modal from "./Modal";

describe("<Modal />", () => {
  it("should look OK", () => {
    cy.mount(Modal, {
      propsData: { title: "hello", body: "coco", show: true },
    });
  });
});
