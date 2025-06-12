import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-detalha-cliente',
  imports: [],
  templateUrl: './detalha-cliente.component.html',
})
export class DetalhaClienteComponent implements OnInit {
  id: string = '';
  cliente: Cliente | null = null;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log('ID do produto:', this.id);

    this.clienteService.getCliente(Number(this.id)).subscribe({
      next: (cliente) => {
        this.cliente = cliente;
      },
      error: (err) => {
        console.error('Erro ao carregar detalhes do cliente:', err);
      },
    });
  }
}
