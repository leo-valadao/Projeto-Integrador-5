export const url = Cypress.env("apiUrl");

Cypress.Commands.add("GetAllServicos", () => {
  cy.api({
    method: "GET",
    url: `${url}/servico`,
    qs: {
      ordenarPo: "id",
    },
    failOnStatusCode: false,
  }).then(function (response) {
    Cypress.env("servico_id", response.body.content[0].id);
    Cypress.env("servico_nome", response.body.content[0].nome);
    Cypress.env("servico_descricao", response.body.content[0].descricao);
    return response;
  });
});

Cypress.Commands.add("PostServico", (payload) => {
  cy.api({
    method: "POST",
    url: `${url}/servico`,
    body: payload,
    failOnStatusCode: false,
  }).then(function (response) {
    Cypress.env("service_id", response.body.id)
    return response;
  });
});

Cypress.Commands.add("GetServicoById", (id) => {
  cy.api({
    method: "GET",
    url: `${url}/servico`,
    qs: {
      id: id,
    },
    failOnStatusCode: false,
  }).then(function (response) {
    return response;
  });
});

Cypress.Commands.add("PutServico", (payload) => {
  cy.api({
    method: "PUT",
    url: `${url}/servico`,
    body: payload,
    failOnStatusCode: false,
  }).then(function (response) {
    return response;
  });
});

Cypress.Commands.add("DeleteServico", (servico_id) => {
  cy.api({
    method: "DELETE",
    url: `${url}/servico`,
    qs: {
      id: servico_id,
    },
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  });
});
