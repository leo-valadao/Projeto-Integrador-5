///<reference types='Cypress' />

describe("Clientes", () => {
  it("GET All clients", () => {
    cy.GetAllClients().then((res) => {
      expect(res.status).to.eql(200);
      expect(res.body.content).to.be.a("array");
      Cypress.env("clienteId", res.body.content[0].id);
    });
  });

  it("GET Cliente por ID", () => {
    const clienteId = Cypress.env("clienteId");

    cy.GetClienteById(clienteId).then((res) => {
      expect(res.status).to.eql(200);
      expect(res.body.id).to.eql(clienteId)
      expect(res.body.nome).to.eql('Leonardo 123')
    });
  });
});
