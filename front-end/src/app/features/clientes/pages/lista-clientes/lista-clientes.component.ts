import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [CommonModule, HlmButtonDirective, RouterLink],
  templateUrl: './lista-clientes.component.html',
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.clienteService.getClientes().subscribe({
      next: (data) => {
        this.clientes = data;
      },
      error: (err) => {
        console.error('Erro ao carregar clientes:', err);
      },
    });
  }

  deletarCliente(clienteId: number): void {
    this.clienteService.deleteCliente(clienteId).subscribe({
      next: () => {
        alert('cliente deletado com sucesso!');
        this.carregarClientes();
      },
      error: (err) => {
        console.error('Erro ao deletar cliente:', err);
      },
    });
  }
}
