import '@testing-library/cypress/add-commands';

describe('Init', () => {
  before(() => {
    cy.visit('/');
  });

  it('Runs a test!', () => {
    expect(true).to.equal(true);
  });
});
