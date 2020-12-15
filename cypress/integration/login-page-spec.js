  /* eslint-disable */
  describe("Login Page", () => {
    beforeEach(() => {
      cy.visit("/")
      cy.get("nav").find("div").eq(6).find("a").click();
    });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h1").contains("Login");
      });
    })

    describe("Login test", () => {
        it("Navigate to Discover Movies when user logs in", () => {
          cy.login()
          cy.get("h2").contains("Discover Movies");

        });
    })

    describe("Navigation Tests", () => {

        it("Navigate to Forgot Passsword", () => {
          cy.get(".link2").click()
          cy.get("h1").contains("Password Reset");
        });

        it("Navigate to Sign Up", () => {
            cy.get(".link").click()
            cy.get("h1").contains("Sign Up")
        });
    })
  })