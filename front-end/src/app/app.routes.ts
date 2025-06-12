import { Routes } from '@angular/router';
import { ListaProdutosComponent } from './features/produtos/pages/lista-produtos/lista-produtos.component';
import { ListaClientesComponent } from './features/clientes/pages/lista-clientes/lista-clientes.component';
import { ListaPedidosComponent } from './features/pedidos/pages/lista-pedidos/lista-pedidos.component';

export const routes: Routes = [
  {
    path: 'produtos',
    component: ListaProdutosComponent,
  },
  {
    path: 'pedidos',
    component: ListaPedidosComponent,
  },
  {
    path: 'clientes',
    component: ListaClientesComponent,
  },
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  // { path: '404', component: Error404Component },
  // { path: '**', redirectTo: '404' },
];
