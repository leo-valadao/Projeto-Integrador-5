import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../entities/model/entity/page.model';
import { Agendamento } from '../entities/model/entity/agendamento.model';
import { ActiveAPIs } from 'src/environments/env-desenvolvimento';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {

  constructor(private http: HttpClient) { }

  obterAgendamentosPorPagina(
    numeroPagina: number,
    quantidadePorPagina: number,
    ordenarPor?: string
  ): Observable<Page<Agendamento>> {
    let url = `${ActiveAPIs.agendamento}?numeroPagina=${numeroPagina}&quantidadePorPagina=${quantidadePorPagina}`;

    if (ordenarPor) {
      url += `&ordenarPor=${ordenarPor}`;
    }

    return this.http.get<Page<Agendamento>>(url);
  }

  salvarAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    let url = `${ActiveAPIs.agendamento}`;

    return this.http.post<Agendamento>(url, agendamento);
  }

  atualizarAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    let url = `${ActiveAPIs.agendamento}`;

    return this.http.put<Agendamento>(url, agendamento);
  }

  excluirAgendamento(idAgendamento: number): Observable<void> {
    let url = `${ActiveAPIs.agendamento}?id=${idAgendamento}`;

    return this.http.delete<void>(url);
  }
}
