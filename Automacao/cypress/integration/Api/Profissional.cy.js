///<reference types='Cypress' />
import {
  payloadPost,
  payloadPut,
} from "../../support/Utils/Data/Profissional/payloadProfissional";

describe("Profissionais", () => {
  it("POST Profissional", () => {
    const payload = payloadPost();
    cy.PostProfissional(payload).then((res) => {
      Cypress.env("profissional_id", res.body.id);
      expect(res.status).to.eql(201);
    });
  });

  it("GET All Profissionais", () => {
    cy.GetAllProfissionais().then((res) => {
      expect(res.status).to.eql(200);
      expect(res.body.content).to.be.a("array");
    });
  });

  it("GET Profissional por Id", () => {
    const id = Cypress.env("profissional_id");
    const payload = payloadPost();
    cy.GetAllProfissionalById(id).then((res) => {
      expect(res.status).to.eql(200);
      expect(res.body.nome).to.eql(payload.nome);
      expect(res.body.cpf).to.eql(payload.cpf);
      expect(res.body.endereco).to.eql(payload.endereco);
      expect(res.body.telefoneCelular).to.eql(payload.telefoneCelular);
    });
  });

  it("PUT Profissional", () => {
    const postPayload = payloadPost();
    const putPayload = payloadPut();
    cy.PutProfissional(putPayload).then((res) => {
      expect(res.status).to.eql(200);
      expect(res.body.id).to.eql(putPayload.id);
      expect(res.body.nome).to.eql(postPayload.nome);
      expect(res.body.cpf).to.eql(postPayload.cpf);
      expect(res.body.endereco).to.eql(putPayload.endereco);
      expect(res.body.telefoneFixo).to.eql(putPayload.telefoneFixo);
      expect(res.body.telefoneCelular).to.eql(putPayload.telefoneCelular);
      expect(res.body.email).to.eql(postPayload.email);
    });
  });

  context("DELETE", () => {
    before(() => {
      const payload = payloadPost();
      cy.PostProfissional(payload).then((res) => {
        Cypress.env("delete_id", res.body.id);
      });
    });

    it("DELETE Profissional - True", () => {
      const id = Cypress.env("delete_id");
      cy.DeleteProfissional(id).then((res) => {
        expect(res.status).to.eql(204);
      });
    });

    it("DELETE Profissional - False", () => {
      const id = Cypress.env("delete_id");
      cy.DeleteProfissional(id).then((res) => {
        expect(res.status).to.eql(500);
        expect(res.body.message).to.eql(
          `Profissional Não Encontrado! ID: ${id}`
        );
      });
    });
  });
});
