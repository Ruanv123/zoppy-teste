import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { toast } from 'ngx-sonner';
import { ModalProdutosComponent } from '../../components/modal-produtos/modal-produtos.component';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { FormsModule } from '@angular/forms';
import { ModalEditProdutoComponent } from '../../components/modal-edit-produto/modal-edit-produto.component';

@Component({
  selector: 'page-lista-produtos',
  standalone: true,
  imports: [
    CommonModule,
    HlmButtonDirective,
    HlmInputDirective,
    NgIcon,
    ModalProdutosComponent,
    HlmIconDirective,
    FormsModule,
    ModalEditProdutoComponent,
  ],
  templateUrl: './lista-produtos.component.html',
  providers: [provideIcons({ lucideSearch })],
})
export class ListaProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  filtroTexto: string = '';

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(filtro?: string): void {
    this.produtoService.getProdutos(filtro).subscribe({
      next: (dados) => {
        this.produtos = dados;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
      },
    });
  }

  filtrarProdutos(): void {
    const filtro = this.filtroTexto.trim();
    this.carregarProdutos(filtro);
  }

  deletarProdutos(produtoId: number): void {
    this.produtoService.deleteProduto(produtoId).subscribe({
      next: () => {
        this.carregarProdutos();
        toast('Produto deletado com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao deletar produto:', err);
      },
    });
  }
}
