const Leite = require("leite");
const generate = new Leite();

export function payloadPost() {
  const payload = {
    nome: Cypress.env("nome"),
    cpf: Cypress.env("cpf"),
    endereco: Cypress.env("endereco"),
    telefoneFixo: "(62)4018-5236",
    telefoneCelular: "(62)98131-7252",
    email: Cypress.env("email"),
  };

  return payload;
}

export function payloadPut() {
  const payload = {
    id: Cypress.env('cliente_id'),
    nome: Cypress.env("nome"),
    cpf: Cypress.env("cpf"),
    endereco: Cypress.env("endereco_put"),
    telefoneFixo: "(62)3018-5236",
    telefoneCelular: "(62)99131-7252",
    email: Cypress.env("email"),
  };

  return payload;
}