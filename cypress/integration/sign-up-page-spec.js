
  /* eslint-disable */
  describe("Sign Up Page", () => {

    beforeEach(() => {
      cy.visit("/")
      cy.get("nav").find("div").eq(7).find("a").click();        
    });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h1").contains("Sign Up");
      });
    })

    describe("Sign Up test", () => {
        it("Navigate to Discover Movies when user logs in", () => {
          cy.signUp()
          cy.get("h2").contains("Discover Movies");
        });
    })

    describe("Navigation Tests", () => {

        beforeEach(() => {
          //cy.signUp()
        });

        it("Navigate to Login", () => {
            cy.get(".link").click()
            cy.get("h1").contains("Login")
          });
    })
  })