/// <reference types="cypress" />

describe.only('my_test', () => {
    beforeEach(() =>{
        cy.visit('https://demoqa.com/automation-practice-form');
    })
    it('filling the form form', () => {
    cy.get('#firstName').type('Tom')
    cy.get('#lastName').type('Bob')
    cy.get('#userEmail').type('test@gmail.com')
    cy.get('#gender-radio-1').check({force: true})
    cy.get('#userNumber').type('123456789')
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select('June')
    cy.get('.react-datepicker__year-select').select('2002')
    cy.get('[class$=day--011]').click()
    // cy.get('#subjectsInput').type('M').type('{enter}')
    cy.get('#subjectsContainer').type('M')
    cy.get('div.subjects-auto-complete__menu').contains('Math').click()
    cy.get('#hobbies-checkbox-1').check({force: true})
    cy.get('#currentAddress').type('1212 River way')
    cy.contains('Select State').click()
    cy.contains('NCR').click()
    // cy.contains('Select City').click()
    cy.get('#city').click()
    cy.contains('Gurgaon').click({force: true})
    cy.get('#submit').click({force: true})
    cy.contains('Thanks for submitting the form').should('be.visible')
    })
})

describe('second test', () =>{
    beforeEach('open site', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/webtables')
    })

    it('add new user', () =>{
        cy.get('#addNewRecordButton').click({force: true})
        cy.get("#firstName").type('Rimma')
        cy.get('#lastName').type('M')
        cy.get('#userEmail').type('rimma@gmail.com')
        cy.get('#age').type('12')
        cy.get('#salary').type('100000')
        cy.get('#department').type('IT')
        cy.get('#submit').click()
        cy.contains('Rimma').should('be.visible')
        cy.get('#searchBox').type('Rimma')
        cy.get('.rt-tbody div.rt-tr[role="row"]:not(.-padRow)').should('have.length', 1)
        cy.get('span[title="Delete"]').click()
        cy.get('.rt-noData').should('have.text', 'No rows found')
        cy.get('.rt-tbody div.rt-tr[role="row"]:not(.-padRow)').should('not.exist')
    })

})