import { Component, ViewChild } from '@angular/core';
import { FormularioClientesComponent } from './formulario-clientes/formulario-clientes.component';
import { Cliente } from '../shared/entities/model/Cliente';
import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {

  @ViewChild(FormularioClientesComponent) formularioClientes!: FormularioClientesComponent;
  @ViewChild(TabelaClientesComponent) tabelaClientes!: TabelaClientesComponent;

  exibirFormularioCliente(cliente: Cliente) {
    this.formularioClientes.cliente = cliente;
    this.formularioClientes.exibirFormulario = true;
  }

  atualizarTabela() {
    this.tabelaClientes.atualizarTabela();
  }
}
