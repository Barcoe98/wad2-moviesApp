  /* eslint-disable */
  describe("Dashboard Page", () => {
    before(() => {
        //before anything log in a user
        cy.login()
          })
    beforeEach(() => {
       //click dashboard link on navbar to go to dashboard
        cy.get("nav").find("div").eq(8).find("a").click();
    });
  
    describe("Base test", () => {
      // chceck if the header is displaying correctly for Dashboard page
        it("displays page header", () => {
        cy.get("h1").contains("Profile");
      });
    })

    describe("Log Out test", () => {
        it("Navigate to Login when user Logs Out", () => {
            //log user out and check if the logged out user it put back to the home page
          cy.logOut();
          cy.get("h1").contains("Login");

        });
    })

    describe("Navigation Tests", () => {

        // it("Navigate to Update Profile", () => {
        //   cy.visit("/dashboard");
        //   cy.get(".upBtn").click()
        //   cy.get("h1").contains("Update Profile");
        // });

    })
  })