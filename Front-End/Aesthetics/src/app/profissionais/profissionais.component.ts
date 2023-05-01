import { Component, ViewChild } from '@angular/core';
import { TabelaProfissionaisComponent } from './tabela-profissionais/tabela-profissionais.component';
import { FormularioProfissionaisComponent } from './formulario-profissionais/formulario-profissionais.component';
import { Profissional } from '../shared/entities/model/profissional.model';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
})
export class ProfissionaisComponent {

  @ViewChild(FormularioProfissionaisComponent) formularioProfissionais!: FormularioProfissionaisComponent;
  @ViewChild(TabelaProfissionaisComponent) tabelaProfissionais!: TabelaProfissionaisComponent;

  exibirFormularioProfissional(profissional: Profissional) {
    this.formularioProfissionais.profissional = profissional;
    this.formularioProfissionais.exibirFormulario = true;
  }

  atualizarTabela() {
    this.tabelaProfissionais.atualizarTabela();
  }
}

