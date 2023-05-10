///<reference types='Cypress' />
import { services } from "../../fixtures/services.json";
import {
  payloadPost,
  payloadPut,
} from "../../support/Utils/Data/Servicos/payloadServico";

describe("Serviços", () => {
  const postPayload = payloadPost();

  context("POST Serviço", () => {
    it("POST Serviço - Success True", () => {
      cy.PostServico(postPayload).then((res) => {
        expect(res.status).to.eql(201);
      });
    });

    it("POST Serviço - Success False", () => {
      cy.PostServico(postPayload).then((res) => {
        expect(res.status).to.eql(400);
      });
    });
  });

  context("GET ALL Serviços", () => {
    it("Get ALL Serviços", () => {
      cy.GetAllServicos().then((res) => {
        expect(res.status).to.eql(200);
        expect(res.body.content).to.be.a("array");
      });
    });
  });

  context("GET Serviços por ID", () => {
    before(() => {
      cy.GetAllServicos().then((response) => {
        Cypress.env("servico_id", response.body.content[0].id);
        Cypress.env("servico_nome", response.body.content[0].nome);
        Cypress.env("servico_descricao", response.body.content[0].descricao);
      });
    });
    it("GET Serviço por ID", () => {
      const servico_id = Cypress.env("servico_id");
      const servico_nome = Cypress.env("servico_nome");
      const servico_descricao = Cypress.env("servico_descricao");
      cy.GetServicoById(servico_id).then((res) => {
        expect(res.status).to.eql(200);
        expect(res.body.id).to.eql(servico_id);
        expect(res.body.nome).to.eql(servico_nome);
        expect(res.body.descricao).to.eql(servico_descricao);
      });
    });
  });

  context("PUT Serviço", () => {
    before(() => {
      cy.PostServico(postPayload).then((res) => {
        Cypress.env("service_id", res.body.id);
        expect(res.status).to.eql(201);
      });
    });
    it("PUT Serviço", () => {
      const id = Cypress.env("service_id");
      const putPayload = payloadPut(id);
      cy.PutServico(putPayload).then((res) => {
        expect(res.status).to.eql(200);
        expect(res.body.id).to.eql(id);
        expect(res.body.nome).to.eql(putPayload.nome);
        expect(res.body.descricao).to.eql(putPayload.descricao);
        expect(res.body.valor).to.eql(putPayload.valor);
      });
    });
  });

  context("DELTE Serviço", () => {
    before(() => {
      cy.PostServico(postPayload).then((res) => {
        Cypress.env("service_id", res.body.id);
        expect(res.status).to.eql(201);
      });
    });
    it("DELETE Serviço", () => {
      const id = Cypress.env("service_id");
      cy.DeleteServico(id).then((res) => {
        expect(res.status).to.eql(204);
      });
    });
  });

  // context("POST LIST - Serviços", () => {
  //   services.forEach(function (servicos) {
  //     it(`Deve Cadastrar o Serviço ${servicos.nome}`, () => {
  //       cy.PostServico(servicos).then((res) => {
  //         expect(res.status).to.eql(201);
  //       });
  //     });
  //   });
  // });
});
