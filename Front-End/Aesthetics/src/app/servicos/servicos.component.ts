import { Component, ViewChild } from '@angular/core';
import { TabelaServicosComponent } from './tabela-servicos/tabela-servicos.component';
import { FormularioServicosComponent } from './formulario-servicos/formulario-servicos.component';
import { Servico } from '../shared/entities/model/entity/servico.model';
@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
})
export class ServicosComponent {
  
  @ViewChild(FormularioServicosComponent) formularioServicos!: FormularioServicosComponent;
  @ViewChild(TabelaServicosComponent) tabelaServicos!: TabelaServicosComponent;

  exibirFormularioServico(servico: Servico){
    this.formularioServicos.servico= servico;
    this.formularioServicos.exibirFormulario= true;
  }

  atualizarTabela(){
    this.tabelaServicos.atualizarTabela();
  }
}
