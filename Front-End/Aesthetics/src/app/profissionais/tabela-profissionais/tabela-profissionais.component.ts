import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Profissional } from 'src/app/shared/entities/model/Profissional';
import { ProfissionaisService } from 'src/app/shared/services/profissionais.service';

@Component({
  selector: 'app-tabela-profissionais',
  templateUrl: './tabela-profissionais.component.html'
})
export class TabelaProfissionaisComponent {

  // Variáveis
  profissionais!: Profissional[];
  profissionaisSelecionados!: Profissional[];
  quantidadeTotalProfissionais: number = 10;
  quantidadeProfissionaisExibidosPorPagina: number = 10;
  colunas: { header: string; field: string; align: string }[] = [
    { header: 'ID', field: 'id', align: 'text-center' },
    { header: 'Nome', field: 'nome', align: 'text-center' },
    { header: 'CPF', field: 'cpf', align: 'text-center' },
    {
      header: 'Telefone Celular',
      field: 'telefoneCelular',
      align: 'text-center',
    },
    { header: 'Telefone Fixo', field: 'telefoneFixo', align: 'text-center' },
    { header: 'E-Mail', field: 'email', align: 'text-center' },
    { header: 'Endereço', field: 'endereco', align: 'text-center' },
    { header: 'Instagram', field: 'instagram', align: 'text-center' },
  ];

  // Emissores
  @Output() exibirFormularioProfissional: EventEmitter<Profissional> =
    new EventEmitter<Profissional>();

  // Componentes
  @ViewChild(Table) private tabelaProfissionais!: Table;

  constructor(private clienteService: ProfissionaisService) { }

  ngOnInit(): void { }

  obterTodosProfissionais(
    numeroPagina: number,
    quantidadePorPagina: number,
    ordenarPor?: string
  ): void {
    this.clienteService
      .obterProfissionaisPorPagina(numeroPagina, quantidadePorPagina, ordenarPor)
      .subscribe({
        next: (resposta) => {
          this.profissionais = resposta.content;
          this.quantidadeTotalProfissionais = resposta.totalElements;
        },
        error: (erro) => { },
        complete: () => { },
      });
  }

  mudarPagina(evento: LazyLoadEvent) {
    if (evento.first != undefined && evento.rows != undefined) {
      this.obterTodosProfissionais(
        Math.floor(evento.first / evento.rows),
        evento.rows,
        'id'
      );
    }
  }

  mostrarFormularioProfissional(cliente: Profissional | null) {
    if (cliente) {
      this.exibirFormularioProfissional.emit(JSON.parse(JSON.stringify(cliente)));
    } else {
      this.exibirFormularioProfissional.emit(new Profissional());
    }
  }

  excluirProfissional(idProfissional: number) {
    this.clienteService.excluirProfissional(idProfissional).subscribe({
      next: (resposta) => { },
      error: (erro) => { },
      complete: () => { },
    });
    this.atualizarTabela();
  }

  atualizarTabela() {
    this.obterTodosProfissionais(Math.floor(this.tabelaProfissionais.first / this.tabelaProfissionais.rows), this.tabelaProfissionais._rows);
  }
}
