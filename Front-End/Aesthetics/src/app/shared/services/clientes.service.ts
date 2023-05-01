import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../entities/others/Page';
import { Cliente } from '../entities/model/cliente.model';
import { ActiveAPIs } from 'src/environments/env-desenvolvimento';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  obterClientesPorPagina(
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

  salvarCliente(cliente: Cliente): Observable<Cliente> {
    let url = `${ActiveAPIs.cliente}`;

    return this.http.post<Cliente>(url, cliente);
  }

  atualizarCliente(cliente: Cliente): Observable<Cliente> {
    let url = `${ActiveAPIs.cliente}`;

    return this.http.put<Cliente>(url, cliente);
  }

  excluirCliente(idCliente: number): Observable<void> {
    let url = `${ActiveAPIs.cliente}?id=${idCliente}`;

    return this.http.delete<void>(url);
  }
}
