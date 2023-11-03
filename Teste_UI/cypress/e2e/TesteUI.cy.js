/// <reference types = "cypress"/>

describe('Criando cenários de testes para o site Pedrão Imóveis', ()=> {
  it('Caso de teste: Aceitando os termos de cookie do Site', ()=> {
    cy.visit('https://www.pedraoimoveis.com.br/index')
    cy.get('.col-2 > .mat-raised-button').click()

  })

  it('Caso de teste: Cadastrando um imovel com sucesso', ()=> {
    cy.visit('https://www.pedraoimoveis.com.br/index')
    cy.get('.col-2 > .mat-raised-button').click()
    cy.get('div.ng-star-inserted > :nth-child(8)').click()
    cy.get('#mat-input-1').type('Inatel')
    cy.get('#mat-input-2').type('email@inatel.br')
    cy.get('#mat-input-3').type('(35) 99988-7766')
    cy.get(':nth-child(5) > .col-auto > .mat-raised-button').click()
  })

  it('Caso de teste: Cadastrando um imovel com falha (faltando telefone)', ()=> {
    cy.visit('https://www.pedraoimoveis.com.br/index')
    cy.get('.col-2 > .mat-raised-button').click()
    cy.get('div.ng-star-inserted > :nth-child(8)').click()
    cy.get('#mat-input-1').type('Inatel')
    cy.get('#mat-input-2').type('email@inatel.br')
    cy.get('#mat-input-3').type('(35) 99988-7766')
    cy.get('#mat-input-3').clear()
    cy.get('#mat-input-3').click()
    cy.get(':nth-child(5) > .col').click()
    cy.get('strong').should('contain', 'obrigatório')
  })

  it('Caso de teste: Selecionando bairro Anchieta e Pesquisando', ()=> {
    cy.visit('https://www.pedraoimoveis.com.br/index')
    cy.get('.col-2 > .mat-raised-button').click()
    cy.get('#mat-select-3 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
    cy.get('#mat-option-15 > .mat-option-text').click()
    cy.get(':nth-child(6) > .mat-raised-button').click()
    cy.get('#mat-select-6 > .mat-select-trigger > .mat-select-value').should('contain.text','ANCHIETA')
  })

  it('Caso de teste: Encomendando um imovel', ()=> {
    cy.visit('https://www.pedraoimoveis.com.br/index')
    cy.get('.col-2 > .mat-raised-button').click()
    cy.get('div.ng-star-inserted > :nth-child(7)').click()
    cy.get('#exampleFormControlTextarea2').type('CASA')
    cy.get('#mat-input-2').type('Contratante')
    cy.get('#mat-input-3').type('OI')
    cy.get('#mat-input-5').type('email@inatel.br')
    cy.get(':nth-child(9) > .col-auto> .mat-raised-button').click()
    cy.get('.mat-simple-snackbar > :nth-child(1)').should('have.text', 'E-mail enviado para a imobiliária com sucesso!')
  })

  it('Caso de teste: Realizando login incorreto (Não possui acesso ao sistema)', ()=> {
    cy.visit('https://www.pedraoimoveis.com.br/index')
    cy.get('div.ng-star-inserted > :nth-child(1) > .mat-button-wrapper').click()
    cy.get('.mat-menu-content > :nth-child(1)').click()
    cy.get('.col-auto > .mat-raised-button').click()
    cy.get('#mat-input-1').type('Lionel Messi')
    cy.get('#mat-input-2').type('Cristiano Ronaldo 7 #')
    cy.get('.ng-untouched > .mat-raised-button').click()
    cy.get('.mat-simple-snackbar > :nth-child(1)').should('have.text','Login Incorreto!')  
  })

  it('Caso de teste: Selecionando Facebook para ver funciona', ()=> {
    cy.visit('https://www.pedraoimoveis.com.br/index')
    cy.get('.col-2 > .mat-raised-button').click()
    cy.get('.row > :nth-child(2) > :nth-child(2)').click()
  }) 

})