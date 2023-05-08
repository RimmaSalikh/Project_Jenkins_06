// / <reference types = "cypress" />

describe('DemoQA Menu', () => {

    const expectedManuItemNames = [
        'Elements',
        'Forms',
        'Alerts, Frame & Windows',
        'Widgets',
        'Interactions',
        'Book Store Application',
    ];   

    beforeEach(function() {
        cy.visit('https://demoqa.com/');
        cy.fixture('formData').then((formData) => {
            this.formData = formData;
        })
    });


it('Form filling', function() {
    cy.get('.card:nth-child(2)').click();
    cy.get('.element-group:nth-child(2)>div').click();
    cy.get('#firstName')
      .should('have.text', '')
      .type(`${this.formData.firstName}{enter}`)
      .should('have.value', this.formData.firstName)
      .should('have.css', 'border-color', 'rgb(40, 167, 69)');
    cy.get('#userEmail')
      .should('have.text', '')
      .type(`${this.formData.userEmail}{enter}`)
      .should('have.value', this.formData.userEmail)
      .should('have.css', 'border-color', 'rgb(40, 167, 69)');
  })

  it.only('Form filling Version 2', function () {
    cy.visit('/');
    cy.get(".card:nth-child(2)").click();        
    cy.get('.element-group:nth-child(2)>div').click();
    cy.get('#firstName')
    .should('have.text', '')
    .type(`${this.formData.firstName}{enter}`)
    .should('have.value', this.formData.firstName)      
    .should('have.css', 'border-color', 'rgb(40, 167, 69)');
    cy.get('#userEmail')
    .should('have.text', '')
    .type(`${this.formData.userEmail}{enter}`)
    .should('have.value', this.formData.userEmail)
    .should('have.css', 'border-color', 'rgb(40, 167, 69)');      
  });

  it('verification prompt window', function () {
    cy.window().then((inputData) =>{
        cy.get('#promtButton').click();
        cy.stub(inputData, 'prompt').returns("JavaScript")
        cy.get('#promptResult').should('contain', 'JavaScript').and('contain', 'You entered')
    })
});
})