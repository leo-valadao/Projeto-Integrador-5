import "@bahmutov/cy-api";
import "./ApiCommands/Agendamentos/AgendamentosCommands";
import "./ApiCommands/Clientes/ClientesCommands";
import "./ApiCommands/Profissionais/ProfissionaisCommands";
import "./ApiCommands/Servicos/ServicosCommands";
import "./commands";

before(() => {
  cy.GetPessoa();
  cy.GetProfissional();
});
