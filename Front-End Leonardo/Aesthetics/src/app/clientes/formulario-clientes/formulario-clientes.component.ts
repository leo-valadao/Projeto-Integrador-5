import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/shared/entities/model/Cliente';
@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
})
export class FormularioClientesComponent implements OnInit{

  obj: Cliente= new Cliente();
  ngOnInit(): void {
   
  }

  exibirFormulario: boolean = false;

  
}
