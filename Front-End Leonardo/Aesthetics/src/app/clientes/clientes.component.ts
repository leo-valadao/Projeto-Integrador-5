import { Component, ViewChild } from '@angular/core';
import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';
import { FormularioClientesComponent } from './formulario-clientes/formulario-clientes.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {
  
  @ViewChild(FormularioClientesComponent) formularioClientes!: FormularioClientesComponent;

  exibirFormularioCliente() {
    this.formularioClientes.exibirFormulario = true;
  }
}
