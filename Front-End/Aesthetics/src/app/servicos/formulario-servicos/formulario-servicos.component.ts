import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Profissional } from 'src/app/shared/entities/model/entity/profissional.model';
import { Servico } from 'src/app/shared/entities/model/entity/servico.model';
import { ErroGenerico } from 'src/app/shared/entities/model/error/aesthetics-erro.error';
import { ProfissionaisService } from 'src/app/shared/services/profissionais.service';
import { ServicosService } from 'src/app/shared/services/servicos.service';

@Component({
  selector: 'app-formulario-servicos',
  templateUrl: './formulario-servicos.component.html',
})
export class FormularioServicosComponent implements OnInit {
  // Variaveis
  @Input() servico: Servico = new Servico();
  exibirFormulario: boolean = false;
  profissionais!: Profissional[];
  profissionaisSelecionados!: Profissional[];

  // Emissores
  @Output() atualizarTabela: EventEmitter<void> = new EventEmitter();

  // Formulário
  formularioServico = this.formBuilder.group({
    nome: [this.servico.nome, [Validators.required]],
    descricao: [this.servico.descricao],
    valor: [this.servico.valor, [Validators.required]],
    profissionais: [this.servico.profissionaisDisponiveis, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private servicoService: ServicosService,
    private profissionalService: ProfissionaisService
  ) {}

  ngOnInit(): void {
    this.formularioServico.invalid;

    this.profissionalService.obterProfissionaisPorPagina(0, 1000).subscribe({
      next: (resposta) => {
        this.profissionais = resposta.content;
      },
      error: (erro: ErroGenerico) => {},
      complete: () => {},
    });
  }

  salvarServico() {
    if (this.servico.id) {
      this.servicoService.atualizarServico(this.servico).subscribe({
        next: (resposta) => {},
        error: (erro: ErroGenerico) => {},
        complete: () => {
          this.atualizarTabela.emit();
        },
      });
    } else {
      this.servicoService.salvarServico(this.servico).subscribe({
        next: (resposta) => {},
        error: (erro: ErroGenerico) => {},
        complete: () => {
          this.atualizarTabela.emit();
        },
      });
    }
  }
}
