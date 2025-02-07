describe('criação de produtos', () => {
    beforeEach(() => {
        cy.login("teste", "123")
    })

    it('cria produto com sucesso', () => {
       cy.visit("/products") 
       cy.wait(2000)
       cy.get("button").contains("Add").click()
    });
});