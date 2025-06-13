import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getProdutos(filtro?: string): Observable<Produto[]> {
    let params = new HttpParams();

    if (filtro) {
      params = params.set('search', filtro);
    }
    return this.httpClient.get<Produto[]>(`${this.baseUrl}/api/produtos`, {
      params: params,
    });
  }

  updateProduto(
    produto: Partial<Produto> & { id: number }
  ): Observable<Produto> {
    return this.httpClient.patch<Produto>(
      `${this.baseUrl}/api/produtos/${produto.id}`,
      produto
    );
  }

  deleteProduto(produtoId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.baseUrl}/api/produtos/${produtoId}`
    );
  }

  createProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(
      `${this.baseUrl}/api/produtos`,
      produto
    );
  }
}
