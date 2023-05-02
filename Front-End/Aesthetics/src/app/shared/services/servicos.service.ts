import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../entities/model/entity/page.model';
import { Servico } from '../entities/model/entity/servico.model';
import { HttpClient } from '@angular/common/http';
import { ActiveAPIs } from 'src/environments/env-desenvolvimento';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private http: HttpClient) { }

  obterServicosPorPagina(
    numeroPagina: number,
    quantidadePorPagina: number,
    ordenarPor?: string
  ): Observable<Page<Servico>> {
    let url = `${ActiveAPIs.servico}?numeroPagina=${numeroPagina}&quantidadePorPagina=${quantidadePorPagina}`;

    if (ordenarPor) {
      url += `&ordenarPor=${ordenarPor}`;
    }

    return this.http.get<Page<Servico>>(url);
  }

  salvarServico(servico: Servico): Observable<Servico> {
    let url = `${ActiveAPIs.servico}`;

    return this.http.post<Servico>(url, servico);
  }

  atualizarServico(servico: Servico): Observable<Servico> {
    let url = `${ActiveAPIs.servico}`;

    return this.http.put<Servico>(url, servico);
  }

  excluirServico(idServico: number): Observable<void> {
    let url = `${ActiveAPIs.servico}?id=${idServico}`;

    return this.http.delete<void>(url);
  }
}
