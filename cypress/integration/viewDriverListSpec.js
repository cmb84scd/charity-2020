describe("Members", () => {
  beforeEach(() => {
    cy.task("dropAdmins");
    cy.task("addAdmin", { adminName: "admin", password: "1234" });

    cy.task("dropMembers");
    cy.task("addMember", { name: "Cat", role: "driver" });
    cy.task("addMember", { name: "Marija", role: "driver" });
    cy.task("addMember", { name: "Dec", role: "guest" });

    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  it("displays all drivers names and addresses", () => {
    cy.visit("/");
    cy.get("#contact-tab").click();
    cy.get(".driver-list").should("contain", "Cat");
    cy.get(".driver-list").should("contain", "Marija");
    cy.get(".driver-list").should("not.contain", "Dec");
  });

  it("deletes driver from driver list component", () => {
      cy.visit("/");
      cy.get("#contact-tab").click();
      cy.get("#delete-btn-0").click();
      cy.get(".driver-list").should("not.contain", "Cat");
    });

  afterEach(() => {
    cy.visit("/");
    cy.get("#logout").click();
  });
});
