  /* eslint-disable */
  describe("Update Profile Page", () => {
    before(() => {
        //Logins in user
        cy.login();
          })
    beforeEach(() => {
       //click dashboard link on navbar to go to dashboard
       cy.NavigateToUpdateProfile();   
    });
  
    describe("Base test", () => {
      // check if the header is displaying correct text for Dashboard page
        it("displays page header", () => {
        cy.get("h1").contains("Update Profile");
      });
    })

    describe("Navigation Tests", () => {
        it("User Click Cancel Navigate to Home", () => {
        //click cancel link , should bavigate you back to home page
          cy.get("#cancelLink").click();
          cy.get("h2").contains("Discover Movies");

        });

        it("User clicks Cancel Navigate to Home", () => {
            //clicking update profile should update profile ans navigate user to home page
        //   cy.get("#updateProBtn").click();
        //   cy.get("h2").contains("Discover Movies");

        });

    })
  })