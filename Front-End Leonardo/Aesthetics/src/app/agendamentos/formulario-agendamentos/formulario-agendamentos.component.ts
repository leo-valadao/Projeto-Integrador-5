import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/shared/entities/model/Agendamento';

@Component({
  selector: 'app-formulario-agendamentos',
  templateUrl: './formulario-agendamentos.component.html',
  styleUrls: ['./formulario-agendamentos.component.less']
})
export class FormularioAgendamentosComponent implements OnInit {

  agendamento: Agendamento = new Agendamento();
  ngOnInit(): void {

  }
  exibirConsole() {
    console.log(this.agendamento)
  }


}
