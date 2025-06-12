import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-lista-pedidos',
  standalone: true,
  imports: [CommonModule, HlmButtonDirective],
  templateUrl: './lista-pedidos.component.html',
})
export class ListaPedidosComponent {}
