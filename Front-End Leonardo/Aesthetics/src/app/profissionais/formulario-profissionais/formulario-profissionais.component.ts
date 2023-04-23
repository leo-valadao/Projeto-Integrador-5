import { Component, OnInit } from '@angular/core';
import { Profissional } from 'src/app/shared/entities/model/Profissional'; 

@Component({
  selector: 'app-formulario-profissionais',
  templateUrl: './formulario-profissionais.component.html',
  styleUrls: ['./formulario-profissionais.component.less']
})
export class FormularioProfissionaisComponent implements OnInit{

  profissional: Profissional = new Profissional();
  ngOnInit(): void {
   
  }

}
