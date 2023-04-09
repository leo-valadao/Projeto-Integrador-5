// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Prime NG
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';

// Aesthetics
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelLateralComponent } from './painel-lateral/painel-lateral.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TabelaClientesComponent } from './clientes/tabela-clientes/tabela-clientes.component';
import { TabelaAgendamentosComponent } from './agendamentos/tabela-agendamentos/tabela-agendamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelLateralComponent,
    CabecalhoComponent,
    RodapeComponent,
    TabelaClientesComponent,
    TabelaAgendamentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    CheckboxModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
