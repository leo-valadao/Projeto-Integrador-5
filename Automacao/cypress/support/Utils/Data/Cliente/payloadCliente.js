const Leite = require("leite");
const generate = new Leite();

export function payloadPost() {
  const payload = {
    nome: Cypress.env("nome"),
    cpf: Cypress.env("cpf"),
    endereco: Cypress.env("endereco"),
    telefoneFixo: Cypress.env("telefone_fixo").replace(/\s/g, ""),
    telefoneCelular: Cypress.env("celular").replace(/\s/g, ""),
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
    telefoneFixo: Cypress.env("telefone_fixo_put").replace(/\s/g, ""),
    telefoneCelular: Cypress.env("celular_put").replace(/\s/g, ""),
    email: Cypress.env("email"),
  };

  return payload;
}