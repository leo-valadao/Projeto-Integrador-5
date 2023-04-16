import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';

export const Rotas: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent,
  },
  {
    path: 'agendamentos',
    component: AgendamentosComponent,
  },
  {
    path: 'profissionais',
    component: ProfissionaisComponent,
  },
  {
    path: 'servicos',
    component: ServicosComponent,
  },
];
