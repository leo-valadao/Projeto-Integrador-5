// Angular
import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

// Prime NG
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Cliente } from 'src/app/shared/entities/model/entity/cliente.model';
import { ErroGenerico } from 'src/app/shared/entities/model/error/aesthetics-erro.error';

// Aesthetics
import { ClientesService } from 'src/app/shared/services/clientes.service';

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
})
export class TabelaClientesComponent implements OnInit {

  // Variáveis
  clientes!: Cliente[];
  clientesSelecionados!: Cliente[];
  quantidadeTotalClientes: number = 10;
  quantidadeClientesExibidosPorPagina: number = 10;
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
    { header: 'Alergias', field: 'alergias', align: 'text-start' },
  ];

  // Emissores
  @Output() exibirFormularioCliente: EventEmitter<Cliente> =
    new EventEmitter<Cliente>();

  // Componentes
  @ViewChild(Table) private tabelaClientes!: Table;

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void { }

  obterTodosClientes(
    numeroPagina: number,
    quantidadePorPagina: number,
    ordenarPor?: string
  ): void {
    this.clienteService
      .obterClientesPorPagina(numeroPagina, quantidadePorPagina, ordenarPor)
      .subscribe({
        next: (resposta) => {
          this.clientes = resposta.content;
          this.quantidadeTotalClientes = resposta.totalElements;
        },
        error: (erro: ErroGenerico) => {},
        complete: () => {},
      });
  }

  mudarPagina(evento: LazyLoadEvent) {
    if (evento.first != undefined && evento.rows != undefined) {
      this.obterTodosClientes(
        Math.floor(evento.first / evento.rows),
        evento.rows,
        'id'
      );
    }
  }

  mostrarFormularioCliente(cliente: Cliente | null) {
    if (cliente) {
      this.exibirFormularioCliente.emit(JSON.parse(JSON.stringify(cliente)));
    } else {
      this.exibirFormularioCliente.emit(new Cliente());
    }
  }

  excluirCliente(idCliente: number) {
    this.clienteService.excluirCliente(idCliente).subscribe({
      next: (resposta) => { },
      error: (erro: ErroGenerico) => { },
      complete: () => { this.atualizarTabela() },
    });
    this.atualizarTabela();
  }

  atualizarTabela() {
    this.obterTodosClientes(Math.floor(this.tabelaClientes.first / this.tabelaClientes.rows), this.tabelaClientes._rows);
  }
}
