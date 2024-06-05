// https://on.cypress.io/api

// This test suite is for checking if the frontend loads
describe('frontend loads', () => {
  // This test case checks if the app is accessible by making a request to the app's URL
  it('visits the app', () => {
    // Make a request to the app's URL
    cy.request('http://localhost:5173').then((response) => {
      // Check if the response status is 200, which means the request was successful
      expect(response.status).to.eq(200);
    })
  })
});

// This test suite is for checking the content of the h1 tag on the app
describe('Check h1 tag on app has "You did it!"', () => {
  // This test case checks if the h1 tag on the app has the text "You did it!"
  it('visits the app', () => {
    // Visit the app's URL
    cy.visit('http://localhost:5173')
    // Get the h1 tag and check if it has the text "You did it!"
    cy.get('h1').should('have.text','You did it!')
  })
});

describe('RouterLink navigation', () => {
  it('navigates to the correct page when the link is clicked', () => {
    // Visit the page where the link is located
    cy.visit('http://localhost:5173');

    // Wait for the element to be loaded
    cy.wait(5000); // wait for 5000 milliseconds

    // Select the link and click on it - no class define a class  i app.vue 
    cy.get('.aboutlink').click();

    // Assert that the URL is now the expected URL
    cy.url().should('include', '/about');
  });
});

