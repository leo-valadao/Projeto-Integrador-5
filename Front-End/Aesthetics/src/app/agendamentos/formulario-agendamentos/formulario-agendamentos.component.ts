import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Agendamento } from 'src/app/shared/entities/model/entity/agendamento.model';
import { Cliente } from 'src/app/shared/entities/model/entity/cliente.model';
import { Profissional } from 'src/app/shared/entities/model/entity/profissional.model';
import { Servico } from 'src/app/shared/entities/model/entity/servico.model';
import { ErroGenerico } from 'src/app/shared/entities/model/error/aesthetics-erro.error';
import { AgendamentosService } from 'src/app/shared/services/agendamentos.service';
import { ClientesService } from 'src/app/shared/services/clientes.service';
import { ProfissionaisService } from 'src/app/shared/services/profissionais.service';
import { ServicosService } from 'src/app/shared/services/servicos.service';

@Component({
  selector: 'app-formulario-agendamentos',
  templateUrl: './formulario-agendamentos.component.html',
})
export class FormularioAgendamentosComponent implements OnInit {
  // Variáveis
  @Input() agendamento: Agendamento = new Agendamento();
  exibirFormulario: boolean = false;
  profissionais!: Profissional[];
  profissionalSelecionado!: Profissional;
  clientes!: Cliente[];
  clienteSelecionado!: Cliente;
  servicos!: Servico[];
  servicoSelecionado!: Servico;

  // TODO - Trocar Os P-MultiSelect Para COMPONENTE PRIME NG
  // DE APENAS 1 OPÇÃO DE ESCOLHA

  // Emissores
  @Output() atualizarTabela: EventEmitter<void> = new EventEmitter();

  formularioAgendamento = this.formBuilder.group({
    agendamentoDataHora: [
      this.agendamento.agendamentoDataHora,
      [Validators.required],
    ],
    duracao: [this.agendamento.duracao, Validators.required],
    finalizacaoAgendamento: [
      this.agendamento.finalizacaoAgendamento,
      Validators.required,
    ],
    profissional: [this.agendamento.profissional, Validators.required],
    servico: [this.agendamento.servico, Validators.required],
    cliente: [this.agendamento.cliente, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private agendamentoService: AgendamentosService,
    private profissionalService: ProfissionaisService,
    private clientelService: ClientesService,
    private servicolService: ServicosService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.formularioAgendamento.invalid;

    this.profissionalService.obterProfissionaisPorPagina(0, 1000).subscribe({
      next: (resposta) => {
        this.profissionais = resposta.content;
      },
      error: (erro: ErroGenerico) => {},
      complete: () => {
        this.atualizarTabela.emit();
      },
    });

    this.servicolService.obterServicosPorPagina(0, 1000).subscribe({
      next: (resposta) => {
        this.servicos = resposta.content;
      },
      error: (erro: ErroGenerico) => {},
      complete: () => {
        this.atualizarTabela.emit();
      },
    });

    this.clientelService.obterClientesPorPagina(0, 1000).subscribe({
      next: (resposta) => {
        this.clientes = resposta.content;
      },
      error: (erro: ErroGenerico) => {},
      complete: () => {
        this.atualizarTabela.emit();
      },
    });
  }

  salvarAgendamento() {
    if (this.agendamento.id) {
      this.agendamentoService.atualizarAgendamento(this.agendamento).subscribe({
        next: (resposta: Agendamento) => {
          this.messageService.add({
            key: 'toast',
            severity: 'sucess',
            summary: 'Profissional Adicionado!',
            detail: `Agendamento realizado para ${resposta.agendamentoDataHora}!`,
            life: 5000,
          });
        },
        error: (erro: ErroGenerico) => {},
        complete: () => {
          this.atualizarTabela.emit();
        },
      });
    } else {
      this.agendamentoService.salvarAgendamento(this.agendamento).subscribe({
        next: (resposta) => {},
        error: (erro: ErroGenerico) => {},
        complete: () => {
          this.atualizarTabela.emit();
        },
      });
    }
  }

  atualizarServicosPorProfissional(profissionalSelecionado: Profissional) {
    if (profissionalSelecionado) {
      this.servicos = profissionalSelecionado.servicosDisponiveis;
    } else {
      this.profissionalService.obterProfissionaisPorPagina(0, 1000).subscribe({
        next: (resposta) => {
          this.profissionais = resposta.content;
        },
        error: (erro: ErroGenerico) => {},
        complete: () => {
          this.atualizarTabela.emit();
        },
      });
    }
  }

  atualizarProfissionalPorServico(servicoSelecionado: Servico) {
    if (servicoSelecionado) {
      this.profissionais = servicoSelecionado.profissionaisDisponiveis;
    } else {
      this.servicolService.obterServicosPorPagina(0, 1000).subscribe({
        next: (resposta) => {
          this.servicos = resposta.content;
        },
        error: (erro: ErroGenerico) => {},
        complete: () => {
          this.atualizarTabela.emit();
        },
      });
    }
  }
}
