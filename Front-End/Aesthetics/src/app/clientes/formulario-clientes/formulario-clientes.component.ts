import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Cliente } from 'src/app/shared/entities/model/Cliente';
import { ClientesService } from 'src/app/shared/services/clientes.service';
@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
})
export class FormularioClientesComponent implements OnInit {

  // Variáveis
  @Input() cliente: Cliente = new Cliente();
  exibirFormulario: boolean = false;

  // Emissores
  @Output() atualizarTabela: EventEmitter<void> =
    new EventEmitter();

  // Formulário
  formularioCliente = this.formBuilder.group({
    nome: [this.cliente.nome, [Validators.required, Validators.maxLength(50)]],
    cpf: [this.cliente.cpf, [Validators.minLength(14), Validators.maxLength(14)]],
    endereco: [this.cliente.endereco, Validators.maxLength(150)],
    telefoneFixo: [this.cliente.telefoneFixo, Validators.maxLength(14)],
    telefoneCelular: [this.cliente.telefoneCelular, [Validators.required, Validators.minLength(13), Validators.maxLength(14)]],
    email: [this.cliente.email, Validators.email],
    alergias: [this.cliente.alergias, Validators.nullValidator],
  });

  constructor(private formBuilder: FormBuilder,
    private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.formularioCliente.invalid
  }

  salvarCliente() {
    if (this.cliente.id) {
      this.clienteService.atualizarCliente(this.cliente).subscribe({
        next: (respota) => { },
        error: (erro) => { },
        complete: () => { this.atualizarTabela.emit(); }
      });
    } else {
      this.clienteService.salvarCliente(this.cliente).subscribe({
        next: (respota) => { },
        error: (erro) => { },
        complete: () => { this.atualizarTabela.emit(); }
      });
    }
  }
}
