///<reference types='Cypress' />
import { payloadPost } from "../../support/Utils/Data/Agendamento/payloadAgendamento";

describe("Agendamento", () => {
  before(() => {
    cy.GetAllClients();
    cy.GetAllServicos();
    cy.GetAllProfissionais();
  });
  it("POST Agendamento - Success True", () => {
    const cliente_id = Cypress.env("clienteId");
    const profissional_id = Cypress.env("id_profissional");
    const servico_id = Cypress.env("servico_id");
    const payload = payloadPost(cliente_id, profissional_id, servico_id);
    cy.PostAgendamento(payload).then((res) => {
      expect(res.status).to.eql(201);
    });
  });
});
