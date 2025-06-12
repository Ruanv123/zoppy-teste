import { HttpClient } from '@angular/common/http';
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

  getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.baseUrl}/api/clientes`);
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

  updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(
      `${this.baseUrl}/api/clientes/${cliente.id}`,
      cliente
    );
  }

  deleteCliente(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/api/clientes/${id}`);
  }
}
