import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getClientes(filtro?: string): Observable<Cliente[]> {
    let params = new HttpParams();

    if (filtro) {
      params = params.set('search', filtro);
    }
    return this.httpClient.get<Cliente[]>(`${this.baseUrl}/api/clientes`, {
      params: params,
    });
  }

  getCliente(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.baseUrl}/api/clientes/${id}`);
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(
      `${this.baseUrl}/api/clientes`,
      cliente
    );
  }

  updateCliente(
    cliente: Partial<Cliente> & { id: number }
  ): Observable<Cliente> {
    return this.httpClient.patch<Cliente>(
      `${this.baseUrl}/api/clientes/${cliente.id}`,
      cliente
    );
  }

  deleteCliente(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/api/clientes/${id}`);
  }
}
