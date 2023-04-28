export const url = Cypress.env("apiUrl");

Cypress.Commands.add("PostAgendamento", (payload) => {
  cy.api({
    method: "POST",
    url: `${url}/agendamento`,
    body: payload,
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  });
});
