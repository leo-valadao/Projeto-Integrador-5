import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Agendamento } from 'src/app/shared/entities/model/Agendamento';
import { Cliente } from 'src/app/shared/entities/model/Cliente';
import { Profissional } from 'src/app/shared/entities/model/Profissional';
import { Servico } from 'src/app/shared/entities/model/Servico';
import { AgendamentosService } from 'src/app/shared/services/agendamentos.service';
import { ClientesService } from 'src/app/shared/services/clientes.service';
import { ProfissionaisService } from 'src/app/shared/services/profissionais.service';
import { ServicosService } from 'src/app/shared/services/servicos.service';

@Component({
  selector: 'app-formulario-agendamentos',
  templateUrl: './formulario-agendamentos.component.html'
})
export class FormularioAgendamentosComponent implements OnInit {


  // Variáveis
  @Input() agendamento: Agendamento = new Agendamento();
  exibirFormulario: boolean = false;
  profissionais!: Profissional[];
  profissionaisSelecionados!: Profissional[];
  clientes!: Cliente[];
  clientesSelecionados!: Cliente[];
  servicos!: Servico[];
  servicosSelecionados!: Servico[];


   // Emissores
   @Output() atualizarTabela: EventEmitter<void> =
   new EventEmitter();

   formularioAgendamento = this.formBuilder.group({
    agendamentoDataHora: [this.agendamento.agendamentoDataHora, [Validators.required]],
    duracao: [this.agendamento.duracao],
    finalizacaoAgendamento: [this.agendamento.finalizacaoAgendamento],
    profissional: [this.agendamento.profissional],
    cliente: [this.agendamento.cliente],
    servico: [this.agendamento.servico ],
   
  });

  constructor(private formBuilder: FormBuilder,
    private agendamentoService: AgendamentosService,
    private profissionalService: ProfissionaisService,
    private clientelService: ClientesService,
    private servicolService: ServicosService
    ) { }

  ngOnInit(): void {
    this.formularioAgendamento.invalid
  }

  salvarAgendamento() {
    if (this.agendamento.id) {
      this.agendamentoService.atualizarAgendamento(this.agendamento).subscribe({
        next: (resposta) => { },
        error: (erro) => { },
        complete: () => { this.atualizarTabela.emit(); }
      });
    } else {
      this.agendamentoService.salvarAgendamento(this.agendamento).subscribe({
        next: (resposta) => { },
        error: (erro) => { },
        complete: () => { this.atualizarTabela.emit(); }
      });
    }
  }


}
