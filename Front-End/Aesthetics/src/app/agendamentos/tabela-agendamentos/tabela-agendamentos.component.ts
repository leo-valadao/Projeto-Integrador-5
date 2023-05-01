import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Agendamento } from 'src/app/shared/entities/model/agendamento.model';
import { AgendamentosService } from 'src/app/shared/services/agendamentos.service';
@Component({
  selector: 'app-tabela-agendamentos',
  templateUrl: './tabela-agendamentos.component.html'
})
export class TabelaAgendamentosComponent {

  agendamentos!: Agendamento[];
  agendamentosSelecionados!: Agendamento[];
  quantidadeTotalAgendamentos: number = 10;
  quantidadeAgendamentosExibidosPorPagina: number = 10;
  colunas: { header: string; field: string; align: string }[] = [
    { header: 'ID', field: 'id', align: 'text-center' },
    { header: 'Data e Horário', field: 'agendamentoDataHora', align: 'text-center' },
    { header: 'Duração', field: 'duracao', align: 'text-center' },
    {
      header: 'Horário Final',
      field: 'finalizacaoAgendamento',
      align: 'text-center',
    },
    { header: 'Cliente', field: 'cliente', align: 'text-center' },
    { header: 'Serviço', field: 'servico', align: 'text-center' },
    { header: 'Profissional', field: 'profissional', align: 'text-center' },

  ];

  // Emissores
  @Output() exibirFormularioAgendamento: EventEmitter<Agendamento> =
    new EventEmitter<Agendamento>();

  @ViewChild(Table) private tabelaAgendamentos!: Table;

  constructor(private agendamentoService: AgendamentosService) { }

  ngOnInit(): void { }

  obterTodosAgendamentos(
    numeroPagina: number,
    quantidadePorPagina: number,
    ordenarPor?: string
  ): void {
    this.agendamentoService
      .obterAgendamentosPorPagina(numeroPagina, quantidadePorPagina, ordenarPor)
      .subscribe({
        next: (resposta) => {
          this.agendamentos = resposta.content;
          this.quantidadeTotalAgendamentos = resposta.totalElements;
        },
        error: (erro) => { },
        complete: () => { },
      });
  }

  mudarPagina(evento: LazyLoadEvent) {
    if (evento.first != undefined && evento.rows != undefined) {
      this.obterTodosAgendamentos(
        Math.floor(evento.first / evento.rows),
        evento.rows,
        'id'
      );
    }
  }


  mostrarFormularioAgendamentos(cliente: Agendamento | null) {
    if (cliente) {
      this.exibirFormularioAgendamento.emit(JSON.parse(JSON.stringify(cliente)));
    } else {
      this.exibirFormularioAgendamento.emit(new Agendamento());
    }
  }

  excluirAgendamento(idAgendamento: number) {
    this.agendamentoService.excluirAgendamento(idAgendamento).subscribe({
      next: (resposta) => { },
      error: (erro) => { },
      complete: () => { this.atualizarTabela() },
    });
    this.atualizarTabela();
  }

  atualizarTabela() {
    this.obterTodosAgendamentos(Math.floor(this.tabelaAgendamentos.first / this.tabelaAgendamentos.rows), this.tabelaAgendamentos._rows);
  }



}










