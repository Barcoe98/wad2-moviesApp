describe("Home Page", () => {
    beforeEach(() => {
        //forces refresh before each test case
      cy.visit("/");
    });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("No. Movies");
        cy.get(".badge").contains(20);
      });
    })
  })