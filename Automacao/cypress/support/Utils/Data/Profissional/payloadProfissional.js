const Leite = require("leite");
const generate = new Leite();

export function payloadPost() {
  const payload = {
    nome: Cypress.env("profissional_nome"),
    cpf: Cypress.env("profissional_cpf"),
    endereco: Cypress.env("profissional_endereco"),
    telefoneFixo: Cypress.env("profissional_telefone_fixo").replace(/\s/g, ""),
    telefoneCelular: Cypress.env("profissional_celular").replace(/\s/g, ""),
    email: Cypress.env("profissional_email"),
  };

  return payload;
}

export function payloadPut() {
  const payload = {
    id: Cypress.env('profissional_id'),
    nome: Cypress.env("profissional_nome"),
    cpf: Cypress.env("profissional_cpf"),
    endereco: Cypress.env("profissional_endereco_put"),
    telefoneFixo: Cypress.env("profissional_telefone_fixo_put").replace(/\s/g, ""),
    telefoneCelular: Cypress.env("profissional_celular_put").replace(/\s/g, ""),
    email: Cypress.env("profissional_email"),
  };

  return payload;
}