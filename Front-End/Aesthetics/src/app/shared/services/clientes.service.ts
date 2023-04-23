import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../entities/others/Page';
import { Cliente } from '../entities/model/Cliente';
import { ActiveAPIs } from 'src/environments/env-desenvolvimento';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  obterTodosClientes(
    numeroPagina: number,
    quantidadePorPagina: number,
    ordenarPor?: string
  ): Observable<Page<Cliente>> {
    let url = `${ActiveAPIs.cliente}?numeroPagina=${numeroPagina}&quantidadePorPagina=${quantidadePorPagina}`;

    if (ordenarPor) {
      url += `&ordenarPor=${ordenarPor}`;
    }

    return this.http.get<Page<Cliente>>(url);
  }
}
