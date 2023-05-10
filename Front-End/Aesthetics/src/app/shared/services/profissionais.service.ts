import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../entities/model/entity/page.model';
import { Profissional } from '../entities/model/entity/profissional.model';
import { ActiveAPIs } from 'src/environments/env-desenvolvimento';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

  constructor(private http: HttpClient) { }

  obterProfissionaisPorPagina(
    numeroPagina: number,
    quantidadePorPagina: number,
    ordenarPor?: string
  ): Observable<Page<Profissional>> {
    let url = `${ActiveAPIs.profissional}?numeroPagina=${numeroPagina}&quantidadePorPagina=${quantidadePorPagina}`;

    if (ordenarPor) {
      url += `&ordenarPor=${ordenarPor}`;
    }

    return this.http.get<Page<Profissional>>(url);
  }

  salvarProfissional(profissional: Profissional): Observable<Profissional> {
    let url = `${ActiveAPIs.profissional}`;

    return this.http.post<Profissional>(url, profissional);
  }

  atualizarProfissional(profissional: Profissional): Observable<Profissional> {
    let url = `${ActiveAPIs.profissional}`;

    return this.http.put<Profissional>(url, profissional);
  }

  excluirProfissional(idProfissional: number): Observable<void> {
    let url = `${ActiveAPIs.profissional}?id=${idProfissional}`;

    return this.http.delete<void>(url);
  }
}
