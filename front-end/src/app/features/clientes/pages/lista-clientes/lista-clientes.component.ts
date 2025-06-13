import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { toast } from 'ngx-sonner';
import { ModalCreateClienteComponent } from '../../components/modal-create-cliente/modal-create-cliente.component';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import {
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent,
} from '@spartan-ng/helm/table';
import { ModalEditClienteComponent } from "../../components/modal-edit-cliente/modal-edit-cliente.component";

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [
    CommonModule,
    HlmButtonDirective,
    HlmInputDirective,
    NgIcon,
    HlmIconDirective,
    ModalCreateClienteComponent,
    FormsModule,
    ModalEditClienteComponent
],
  templateUrl: './lista-clientes.component.html',
  providers: [provideIcons({ lucideSearch })],
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  filtroTexto: string = '';

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(filtro?: string): void {
    this.clienteService.getClientes(filtro).subscribe({
      next: (data) => {
        this.clientes = data;
      },
      error: (err) => {
        console.error('Erro ao carregar clientes:', err);
      },
    });
  }

  filtrarClientes(): void {
    const filtro = this.filtroTexto.trim();
    this.carregarClientes(filtro);
  }

  deletarCliente(clienteId: number): void {
    this.clienteService.deleteCliente(clienteId).subscribe({
      next: () => {
        this.carregarClientes();
        toast('Cliente deletado com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao deletar cliente:', err);
      },
    });
  }
}
