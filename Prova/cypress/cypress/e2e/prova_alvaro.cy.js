/// <reference types = "cypress"/>

describe('Criando cenário de teste para o site DemoQa', ()=> {

  it('Caso de teste: Tentar login sem cadastro - Caso negativo', () => {
    cy.visit('https://demoqa.com/')
  
    cy.get('.category-cards > :nth-child(6) > :nth-child(1)').click()
    cy.get(':nth-child(6) > .element-list > .menu-list > #item-0').click()
    cy.get('#login').click()
    cy.get('#userName').type('inatel')
    cy.get('#password').type('ina')
    cy.get('#login').click()
    cy.get('#name').should('contains.text', 'Invalid username or password!')
  })

  it('Caso de teste: Realizando requisição', () => {
    cy.visit('https://demoqa.com/')
  
    let info = enviarRequisicao()
  
    cy.get('.category-cards > :nth-child(1)').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
    cy.get('#userName').type(info[0])
    cy.get('#submit').click()
    cy.get('#name').should('have.text', 'Name:' + info[0])
  
  })

  it('Caso de teste: Pressionando o Yes e retornando corretamente', ()=> {
    cy.visit('https://demoqa.com/')
    cy.get('.category-cards > :nth-child(1)').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click()
    cy.get(':nth-child(2) > .custom-control-label').click()
    cy.get('.text-success').should('contain.text', 'Yes')
  })
  
  function enviarRequisicao() {
    let hours = new Date().getHours().toString()
    let minutes = new Date().getMinutes().toString()
    let seconds = new Date().getSeconds().toString()
    let user = hours + minutes + seconds + 'name'
    let userInfo = [user]
  
    return userInfo
  }
  

})
