export const url = Cypress.env("apiUrl");

Cypress.Commands.add("GetAllClients", () => {
  cy.api({
    method: "GET",
    url: url + "/cliente",
    failOnStatusCode: false,
  }).then(function (response) {
    return response;
  });
});

Cypress.Commands.add("GetClienteById", (id) => {
  cy.api({
    method: "GET",
    url: url + "/cliente",
    qs: {
      id: id,
    },
    failOnStatusCode: false,
  }).then(function (response) {
    return response;
  });
});