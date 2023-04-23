import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/shared/entities/model/Servico';
@Component({
  selector: 'app-formulario-servicos',
  templateUrl: './formulario-servicos.component.html',
  styleUrls: ['./formulario-servicos.component.less']
})
export class FormularioServicosComponent implements OnInit{

  servico: Servico= new Servico();
  ngOnInit(): void {
   
  }

}
