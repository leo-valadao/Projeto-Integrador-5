///<reference types='Cypress' />
import {
  payloadPost,
  payloadPut,
} from "../../support/Utils/Data/Cliente/payloadCliente";

describe("Clientes", () => {
  context("GET ALL", () => {
    it("Deve retornar todos os clientes", () => {
      cy.GetAllClients().then((res) => {
        expect(res.status).to.eql(200);
        expect(res.body.content).to.be.a("array");
      });
    });
  });

  context("GET by ID", () => {
    before(() => {
      cy.GetAllClients().then((response) => {
        Cypress.env("clienteId", response.body.content[0].id);
        Cypress.env("clienteNome", response.body.content[0].nome);
      });
    });
    it("Deve retornar cliente por ID", () => {
      const clienteId = Cypress.env("clienteId");
      const clienteNome = Cypress.env("clienteNome");

      cy.GetClienteById(clienteId).then((res) => {
        expect(res.status).to.eql(200);
        expect(res.body.id).to.eql(clienteId);
        expect(res.body.nome).to.eql(clienteNome);
      });
    });
  });

  context("POST Cliente", () => {
    it("POST Cliente - Success True", () => {
      const payload = payloadPost();
      cy.PostCliente(payload).then((res) => {
        expect(res.status).to.eql(201);
      });
    });

    it("POST Cliente - Success False", () => {
      const payload = payloadPost();
      cy.PostCliente(payload).then((res) => {
        expect(res.status).to.eql(400);
      });
    });
  });

  context("PUT Cliente", () => {
    before(() => {
      const payload = payloadPost();
      cy.PostCliente(payload).then((res) => {
        expect(res.status).to.eql(201);
        Cypress.env("cliente_id", res.body.id);
      });
    });
    it("PUT Cliente", () => {
      const payload = payloadPost();
      const putPayload = payloadPut();
      cy.PutCliente(putPayload).then((res) => {
        expect(res.status).to.eql(200);
        expect(res.body.id).to.eql(putPayload.id);
        expect(res.body.nome).to.eql(payload.nome);
        expect(res.body.cpf).to.eql(payload.cpf);
        expect(res.body.endereco).to.eql(putPayload.endereco);
        expect(res.body.telefoneFixo).to.eql(putPayload.telefoneFixo);
        expect(res.body.telefoneCelular).to.eql(putPayload.telefoneCelular);
        expect(res.body.email).to.eql(payload.email);
      });
    });
  });

  context("DELETE Cliente", () => {
    before(() => {
      const payload = payloadPost();
      cy.PostCliente(payload).then((res) => {
        Cypress.env("cliente_id", res.body.id);
      });
    });
    it("Delete Cliente - Success True", () => {
      const cliente_id = Cypress.env("cliente_id");
      cy.DeleteCliente(cliente_id).then((res) => {
        expect(res.status).to.eql(204);
      });
    });

    it("Delete Cliente - Success False", () => {
      const cliente_id = Cypress.env("cliente_id");
      cy.DeleteCliente(cliente_id).then((res) => {
        expect(res.status).to.eql(500);
        expect(res.body.message).to.eql(
          `Cliente Não Encontrado! ID: ${cliente_id}`
        );
      });
    });
  });
});
