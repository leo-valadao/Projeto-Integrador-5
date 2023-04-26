///<reference types='Cypress' />
import { payloadPost } from "../../support/Utils/Data/Cliente/payloadCliente";

describe("Clientes", () => {
  const payload = payloadPost();
  it("GET All clients", () => {
    cy.GetAllClients().then((res) => {
      expect(res.status).to.eql(200);
      expect(res.body.content).to.be.a("array");
      Cypress.env("clienteId", res.body.content[0].id);
      Cypress.env("clienteNome", res.body.content[0].nome);
    });
  });

  it("GET Cliente por ID", () => {
    const clienteId = Cypress.env("clienteId");
    const clienteNome = Cypress.env("clienteNome")

    cy.GetClienteById(clienteId).then((res) => {
      expect(res.status).to.eql(200);
      expect(res.body.id).to.eql(clienteId);
      expect(res.body.nome).to.eql(clienteNome);
    });
  });

  it("POST Cliente", () => {
    cy.PostCliente(payload).then((res) => {
      expect(res.status).to.eql(201);
    })
  });
});
