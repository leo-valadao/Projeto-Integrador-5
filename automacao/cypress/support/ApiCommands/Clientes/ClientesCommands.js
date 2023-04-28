export const url = Cypress.env("apiUrl");
// var position = Math.floor(Math.random() * 9);

Cypress.Commands.add("GetAllClients", () => {
  cy.api({
    method: "GET",
    url: `${url}/cliente`,
    failOnStatusCode: false,
  }).then(function (response) {
    Cypress.env("clienteId", response.body.content[0].id);
    Cypress.env("cliente_del", response.body.content[3].id);
    Cypress.env("clienteNome", response.body.content[0].nome);
    return response;
  });
});

Cypress.Commands.add("GetClienteById", (id) => {
  cy.api({
    method: "GET",
    url: `${url}/cliente`,
    qs: {
      id: id,
    },
    failOnStatusCode: false,
  }).then(function (response) {
    return response;
  });
});

Cypress.Commands.add("PostCliente", (payload) => {
  cy.api({
    method: "POST",
    url: `${url}/cliente`,
    body: payload,
    failOnStatusCode: false,
  }).then((response) => {
    Cypress.env("cliente_id", response.body.id);
    return response;
  });
});

Cypress.Commands.add("PutCliente", (payload) => {
  cy.api({
    method: "PUT",
    url: `${url}/cliente`,
    body: payload,
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  });
});

Cypress.Commands.add("DeleteCliente", (cliente_id) => {
  cy.api({
    method: "DELETE",
    url: `${url}/cliente`,
    qs: {
      id: cliente_id,
    },
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  });
});
