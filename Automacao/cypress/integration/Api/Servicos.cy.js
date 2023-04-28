///<reference types='Cypress' />
import { services } from "../../fixtures/services.json";
import { payloadPost } from "../../support/Utils/Data/Servicos/payloadServico";

describe("Serviços", () => {
  it("Get ALL Serviços", () => {
    cy.GetAllServicos().then((res) => {
      expect(res.status).to.eql(200);
      expect(res.body.content).to.be.a("array");
    });
  });

  it("GET Cliente por ID", () => {
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

  it("POST Serviço", () => {
    const payload = payloadPost();
    cy.PostServico(payload).then((res) => {
      expect(res.status).to.eql(201);
    });
  });
});

describe.skip("POST Todos Serviços", () => {
  services.forEach(function (servicos) {
    it(`Deve Cadastrar o Serviço ${servicos.nome}`, () => {
      cy.PostServico(servicos).then((res) => {
        expect(res.status).to.eql(201);
      });
    });
  });
});
