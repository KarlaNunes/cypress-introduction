describe('testes de autenticação - válidos', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept("POST", "/api/login").as("login")
  })

  it('logar com usuário e senha com sucesso', () => {
    // inserir um username
    cy.get("[id='input-username']").type("teste")
    cy.get("input[placeholder='Password']").first().type("123")
    cy.get("button").contains("Login").click()
    cy.wait("@login")
    cy.url().should("contain", "/products")
  })
})