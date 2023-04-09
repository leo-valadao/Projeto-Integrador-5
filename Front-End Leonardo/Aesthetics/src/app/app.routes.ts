import { Routes } from '@angular/router';
import { TabelaClientesComponent } from './clientes/tabela-clientes/tabela-clientes.component';
import { TabelaAgendamentosComponent } from './agendamentos/tabela-agendamentos/tabela-agendamentos.component';
import { TabelaServicosComponent } from './servicos/tabela-servicos/tabela-servicos.component';
import { TabelaProfissionaisComponent } from './profissionais/tabela-profissionais/tabela-profissionais.component';

export const Rotas: Routes = [
  {
    path: 'clientes',
    component: TabelaClientesComponent,
  },
  {
    path: 'agendamentos',
    component: TabelaAgendamentosComponent
  },
  {
    path: 'profissionais',
    component: TabelaProfissionaisComponent
  },
  {
    path: 'servicos',
    component: TabelaServicosComponent
  }
];
