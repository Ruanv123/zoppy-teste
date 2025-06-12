import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getClientes() {
    return this.httpClient.get<Cliente[]>(`${this.baseUrl}/api/clientes`);
  }
}
