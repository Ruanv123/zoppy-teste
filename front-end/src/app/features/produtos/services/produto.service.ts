import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(`${this.baseUrl}/api/produtos`);
  }
}
