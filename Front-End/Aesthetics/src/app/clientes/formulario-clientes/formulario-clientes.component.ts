import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Cliente } from 'src/app/shared/entities/model/Cliente';
import { ClientesService } from 'src/app/shared/services/clientes.service';
@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
})
export class FormularioClientesComponent implements OnInit {
  cliente: Cliente = new Cliente();
  formularioCliente = this.formBuilder.group({
    nome: [this.cliente.nome, [Validators.required, Validators.minLength(1)]],
    cpf: [Validators.minLength(14), Validators.maxLength(14)],
    endereco: [Validators.maxLength(150)],
    telefoneFixo: [Validators.maxLength(14)],
    telefoneCelular: [Validators.required ,Validators.maxLength(14)],
    email: [Validators.email],
    alergias: [Validators.nullValidator],
  });
  ngOnInit(): void {
    this.formularioCliente.invalid
  }

  constructor(private formBuilder: FormBuilder,
    private clienteService: ClientesService) { }

  exibirFormulario: boolean = false;

  salvarCliente() {

    
    this.clienteService.salvarCliente(this.cliente).subscribe(resposta => {
      console.log(resposta);
    });
  }
}
