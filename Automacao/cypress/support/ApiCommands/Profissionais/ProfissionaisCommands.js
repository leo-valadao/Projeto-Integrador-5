export const url = Cypress.env("apiUrl");

Cypress.Commands.add("PostProfissional", (payload) => {
  cy.api({
    method: "POST",
    url: `${url}/profissional`,
    body: payload,
    failOnStatusCode: false,
  }).then((response) => {
    Cypress.env("profissional_id", response.body.id);
    return response;
  });
});

Cypress.Commands.add("GetAllProfissionais", () => {
  cy.api({
    method: "GET",
    url: `${url}/profissional`,
    failOnStatusCode: false,
  }).then(function (response) {
    Cypress.env("profissional_del", response.body.content[1].id);
    Cypress.env("profissional_put", response.body.content[2].id);
    return response;
  });
});

Cypress.Commands.add("GetAllProfissionalById", (id) => {
  cy.api({
    method: "GET",
    url: `${url}/profissional`,
    qs: {
      id: id,
    },
    failOnStatusCode: false,
  }).then(function (response) {
    return response;
  });
});

Cypress.Commands.add("PutProfissional", (payload) => {
  cy.api({
    method: "PUT",
    url: `${url}/profissional`,
    body: payload,
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  });
});
