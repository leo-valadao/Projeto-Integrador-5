import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Cliente } from 'src/app/shared/entities/model/entity/cliente.model';
import { TipoMensagem } from 'src/app/shared/entities/model/enumerable/tipo-mensagem.enum';
import { ErroGenerico } from 'src/app/shared/entities/model/error/aesthetics-erro.error';

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
  @Output() atualizarTabela: EventEmitter<void> = new EventEmitter();

  // Formulário
  formularioCliente = this.formBuilder.group({
    nome: [this.cliente.nome, [Validators.required, Validators.maxLength(50)]],
    cpf: [this.cliente.cpf, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
    endereco: [this.cliente.endereco, Validators.maxLength(150)],
    telefoneFixo: [this.cliente.telefoneFixo, Validators.maxLength(14)],
    telefoneCelular: [this.cliente.telefoneCelular, [Validators.required, Validators.minLength(13), Validators.maxLength(14)]],
    email: [this.cliente.email, Validators.email],
    alergias: [this.cliente.alergias, Validators.nullValidator],
  });

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClientesService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.formularioCliente.invalid;
  }

  salvarCliente() {
    if (this.cliente.id) {
      this.clienteService.atualizarCliente(this.cliente).subscribe({
        next: (resposta: Cliente) => {
          this.messageService.add({
            key: 'toast',
            severity: TipoMensagem.SUCCESS,
            summary: 'Cliente Atualizado!',
            detail: `${resposta.nome} atualizado com sucesso.`,
            life: 5000,
          });
        },
        error: (erro: ErroGenerico) => {
          this.messageService.add({
            key: 'toast',
            severity: TipoMensagem.ERROR,
            summary: 'Erro!',
            detail: `${erro.mensagem}.`,
            life: 5000,
          });
        },
      });
    } else {
      this.clienteService.salvarCliente(this.cliente).subscribe({
        next: (resposta: Cliente) => {
          this.messageService.add({
            key: 'toast',
            severity: TipoMensagem.INFO,
            summary: 'Cliente Adicionado!',
            detail: `${resposta.nome} adicionado com sucesso.`,
            life: 5000,
          });
        },
        error: (erro: ErroGenerico) => {
          this.messageService.add({
            key: 'toast',
            severity: TipoMensagem.ERROR,
            summary: 'Erro!',
            detail: `${erro.mensagem}.`,
            life: 5000,
          });
        },
      });
    }
  }
}
