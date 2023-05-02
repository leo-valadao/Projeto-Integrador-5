import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Profissional } from 'src/app/shared/entities/model/entity/profissional.model';
import { ErroGenerico } from 'src/app/shared/entities/model/error/aesthetics-erro.error';

import { ProfissionaisService } from 'src/app/shared/services/profissionais.service';

@Component({
  selector: 'app-formulario-profissionais',
  templateUrl: './formulario-profissionais.component.html',
})
export class FormularioProfissionaisComponent implements OnInit {
  // Variáveis
  @Input() profissional: Profissional = new Profissional();
  exibirFormulario: boolean = false;

  // Emissores
  @Output() atualizarTabela: EventEmitter<void> = new EventEmitter();

  // Formulário
  formularioProfissional = this.formBuilder.group({
    nome: [
      this.profissional.nome,
      [Validators.required, Validators.maxLength(50)],
    ],
    cpf: [
      this.profissional.cpf,
      [Validators.minLength(14), Validators.maxLength(14)],
    ],
    endereco: [this.profissional.endereco, Validators.maxLength(150)],
    telefoneFixo: [this.profissional.telefoneFixo, Validators.maxLength(14)],
    telefoneCelular: [
      this.profissional.telefoneCelular,
      [Validators.required, Validators.minLength(13), Validators.maxLength(14)],
    ],
    email: [this.profissional.email, Validators.email],
    instagram: [this.profissional.instagram, Validators.nullValidator],
  });

  constructor(
    private formBuilder: FormBuilder,
    private profissionalService: ProfissionaisService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.formularioProfissional.invalid;
  }

  salvarProfissional() {
    if (this.profissional.id) {
      this.profissionalService
        .atualizarProfissional(this.profissional)
        .subscribe({
          next: (resposta: Profissional) => {
            this.messageService.add({
              key: 'toast',
              severity: 'sucess',
              summary: 'Profissional Adicionado!',
              detail: `${resposta.nome} adicionado com sucesso!`,
              life: 5000,
            });
          },
          error: (erro: ErroGenerico) => {},
          complete: () => {
            this.atualizarTabela.emit();
          },
        });
    } else {
      this.profissionalService.salvarProfissional(this.profissional).subscribe({
        next: (resposta) => {},
        error: (erro: ErroGenerico) => {},
        complete: () => {
          this.atualizarTabela.emit();
        },
      });
    }
  }
}
