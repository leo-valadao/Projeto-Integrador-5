import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Servico } from 'src/app/shared/entities/model/Servico';
import { ServicosService } from 'src/app/shared/services/servicos.service';

@Component({
  selector: 'app-tabela-servicos',
  templateUrl: './tabela-servicos.component.html'
})
export class TabelaServicosComponent {

  servicos!: Servico[];
  servicosSelecionados!: Servico[];
  quantidadeTotalServicos:number= 10;
  quantidadeServicosExibidosPorPagina: number= 10;
  colunas: {header: string; field: string; align: string} [] = [
    { header: 'ID', field: 'id', align: 'text-center' },
    { header: 'Nome', field: 'nome', align: 'text-center' },
    { header: 'Descrição', field: 'descricao', align: 'text-center' },
    { header: 'Valor', field: 'valor', align: 'text-center' },
    { header: 'Profissional', field: 'profissionais', align: 'text-center' },
   

  ];
  // Emissores 
  @Output() exibirFormularioServico: EventEmitter<Servico> =
  new EventEmitter<Servico>();

  // componentes
  @ViewChild(Table) private tabelaServicos!: Table;

  constructor(private clienteService: ServicosService) {}

  ngOnInit(): void { }

  obterTodosServicos(
    numeroPagina: number,
    quantidadePorPagina: number,
    ordenarPor?: string

  ):void{
    this.clienteService
    .obterServicosPorPagina(numeroPagina,quantidadePorPagina,ordenarPor)
    .subscribe({
      next: (resposta) => {
        this.servicos = resposta.content;
        this.quantidadeTotalServicos = resposta.totalElements;
      },
      error: (erro) => {},
      complete: () => {},
   });
  }
  mudarPagina(evento: LazyLoadEvent) {
    if (evento.first != undefined && evento.rows != undefined) {
      this.obterTodosServicos(
        Math.floor(evento.first / evento.rows),
        evento.rows,
        'id'
      );
    }
  }

  mostrarFormularioServico(cliente: Servico | null) {
    if (cliente) {
      this.exibirFormularioServico.emit(JSON.parse(JSON.stringify(cliente)));
    } else {
      this.exibirFormularioServico.emit(new Servico());
    }
  }

  excluirServico(idServico: number) {
    this.clienteService.excluirServico(idServico).subscribe({
      next: (resposta) => { },
      error: (erro) => { },
      complete: () => { this.atualizarTabela() },
    });
    this.atualizarTabela();
  }

  atualizarTabela() {
    this.obterTodosServicos(Math.floor(this.tabelaServicos.first / this.tabelaServicos.rows), this.tabelaServicos._rows);
  }



    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }



