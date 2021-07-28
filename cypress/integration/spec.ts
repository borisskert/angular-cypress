it('loads examples', () => {
  cy.visit('/');
  cy.contains('angular-cypress app is running!');
});
