// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Prime NG
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { IMaskModule } from 'angular-imask';





// Aesthetics
import { AppComponent } from './app.component';
import { PainelLateralComponent } from './painel-lateral/painel-lateral.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TabelaClientesComponent } from './clientes/tabela-clientes/tabela-clientes.component';
import { TabelaAgendamentosComponent } from './agendamentos/tabela-agendamentos/tabela-agendamentos.component';
import { Rotas } from './app.routes';
import { TabelaProfissionaisComponent } from './profissionais/tabela-profissionais/tabela-profissionais.component';
import { TabelaServicosComponent } from './servicos/tabela-servicos/tabela-servicos.component';
import { FormularioClientesComponent } from './clientes/formulario-clientes/formulario-clientes.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { FormularioProfissionaisComponent } from './profissionais/formulario-profissionais/formulario-profissionais.component';
import { FormularioServicosComponent } from './servicos/formulario-servicos/formulario-servicos.component';
import { FormularioAgendamentosComponent } from './agendamentos/formulario-agendamentos/formulario-agendamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelLateralComponent,
    CabecalhoComponent,
    RodapeComponent,
    TabelaClientesComponent,
    TabelaAgendamentosComponent,
    TabelaProfissionaisComponent,
    TabelaServicosComponent,
    FormularioClientesComponent,
    ClientesComponent,
    AgendamentosComponent,
    ServicosComponent,
    ProfissionaisComponent,
    FormularioProfissionaisComponent,
    FormularioServicosComponent,
    FormularioAgendamentosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    CheckboxModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    IMaskModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    RouterModule.forRoot(Rotas, { onSameUrlNavigation: 'reload' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
