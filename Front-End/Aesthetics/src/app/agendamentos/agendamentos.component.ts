import { Component, ViewChild } from '@angular/core';
import { FormularioAgendamentosComponent } from './formulario-agendamentos/formulario-agendamentos.component';
import { TabelaAgendamentosComponent } from './tabela-agendamentos/tabela-agendamentos.component';
import { Agendamento } from '../shared/entities/model/agendamento.model';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
})
export class AgendamentosComponent {

  @ViewChild(FormularioAgendamentosComponent) formularioAgendamentos!: FormularioAgendamentosComponent;
  @ViewChild(TabelaAgendamentosComponent) tabelaAgendamentos!: TabelaAgendamentosComponent;

  
  exibirFormularioAgendamento(agendamento: Agendamento) {
    this.formularioAgendamentos.agendamento = agendamento;
    this.formularioAgendamentos.exibirFormulario = true;
  }

  atualizarTabela() {
    this.tabelaAgendamentos.atualizarTabela();
  }

  
}
