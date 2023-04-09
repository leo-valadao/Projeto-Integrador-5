import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { ClienteDTO } from 'src/app/shared/entities/data-transfer-object/ClienteDTO';
import { ClientesService } from 'src/app/shared/services/clientes.service';

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
})
export class TabelaClientesComponent implements OnInit {
  // Variáveis:
  checked: boolean = false;
  colunas: { header: string; field: string }[] = [
    { header: 'ID', field: 'id' },
    { header: 'Nome', field: 'nome' },
    { header: 'CPF', field: 'cpf' },
    { header: 'Telefone Celular', field: 'telefoneCelular' },
    { header: 'Telefone Fixo', field: 'telefoneFixo' },
    { header: 'E-Mail', field: 'email' },
    { header: 'Endereço', field: 'endereco' },
    { header: 'Alergias', field: 'alergias' },
  ];
  clientes!: ClienteDTO[];
  clientesSelecionados!: ClienteDTO[];
  quantidadeTotalClientes: number = 10;
  opcoesPaginasExibidas: number = 5;

  constructor(private clienteService: ClientesService) {}

  ngOnInit(): void {
    this.obterTodosClientes(0, 10, 'id');
  }

  obterTodosClientes(
    numeroPagina: number,
    quantidadePorPagina: number,
    ordenarPor?: string
  ): void {
    this.clienteService
      .obterTodosClientes(numeroPagina, quantidadePorPagina, ordenarPor)
      .subscribe({
        next: (resposta) => {
          console.log('RESPOSTA '+resposta);
          this.clientes = resposta.content;
        },
        error: (erro) => {
          console.log('ERRO OBTER CLIENTES '+erro);
        },
        complete: () => {},
      });
  }

  mudarPagina(evento: LazyLoadEvent) {
    console.log(evento);
    this.obterTodosClientes(1, 10, 'id');
  }

  teste() {
    console.log(this.colunas);
    console.log(this.clientes);
    console.log(this.clientesSelecionados);
  }
}
