describe('criação de produtos', () => {
    beforeEach(() => {
        cy.loginApi()
    })
    
    it('cria um produto com sucesso', () => {
        cy.visit("/products")
    });
});