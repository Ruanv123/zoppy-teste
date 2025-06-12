import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../model/pedido';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getPedidos(): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(`${this.baseUrl}/api/pedidos`);
  }
}
