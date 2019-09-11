import { getGreeting } from '../support/app.po';

describe('userapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to userapp!');
  });
});
