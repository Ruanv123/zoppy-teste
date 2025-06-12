import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSearch, lucideUserSearch } from '@ng-icons/lucide';

@Component({
  selector: 'page-lista-produtos',
  standalone: true,
  imports: [CommonModule, HlmButtonDirective, HlmInputDirective, NgIcon],
  templateUrl: './lista-produtos.component.html',
  providers: [provideIcons({ lucideSearch })],
})
export class ListaProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe({
      next: (dados) => {
        this.produtos = dados;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
      },
    });
  }

  deletarProdutos(produtoId: number): void {
    this.produtoService.deleteProduto(produtoId).subscribe({
      next: () => {
        alert('Produto deletado com sucesso!');
        this.carregarProdutos();
      },
      error: (err) => {
        console.error('Erro ao deletar produto:', err);
      },
    });
  }
}
