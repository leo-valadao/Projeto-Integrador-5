// Angular
import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

// Prime NG
import { LazyLoadEvent } from 'primeng/api';

// Aesthetics
import { Cliente } from 'src/app/shared/entities/model/Cliente';
import { ClientesService } from 'src/app/shared/services/clientes.service';

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html'
})
export class TabelaClientesComponent implements OnInit {
  // Variáveis da Tabela Prime-NG:
  clientes!: Cliente[];
  clientesSelecionados!: Cliente[];
  quantidadeTotalClientes: number = 10;
  quantidadeClientesExibidos: number = 10;
  colunas: { header: string; field: string, align: string }[] = [
    { header: 'ID', field: 'id', align: 'text-center' },
    { header: 'Nome', field: 'nome', align: 'text-center' },
    { header: 'CPF', field: 'cpf', align: 'text-center' },
    { header: 'Telefone Celular', field: 'telefoneCelular', align: 'text-center' },
    { header: 'Telefone Fixo', field: 'telefoneFixo', align: 'text-center' },
    { header: 'E-Mail', field: 'email', align: 'text-center' },
    { header: 'Endereço', field: 'endereco', align: 'text-center' },
    { header: 'Alergias', field: 'alergias', align: 'text-start' },
  ];

  constructor(private clienteService: ClientesService) {}

  ngOnInit(): void {}

  obterTodosClientes(
    numeroPagina: number,
    quantidadePorPagina: number,
    ordenarPor?: string
  ): void {
    this.clienteService
      .obterTodosClientes(numeroPagina, quantidadePorPagina, ordenarPor)
      .subscribe({
        next: (resposta) => {
          this.clientes = resposta.content;
          this.quantidadeTotalClientes = resposta.totalElements;
        },
        error: (erro) => {
          console.log('ERRO OBTER CLIENTES ' + erro);
        },
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

  teste(event: any) {
    console.log(this.colunas);
    console.log(this.clientes);
    console.log(this.clientesSelecionados);
  }
}
