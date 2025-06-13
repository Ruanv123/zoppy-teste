import { Routes } from '@angular/router';
import { ListaClientesComponent } from './features/clientes/pages/lista-clientes/lista-clientes.component';
import { ListaProdutosComponent } from './features/produtos/pages/lista-produtos/lista-produtos.component';

export const routes: Routes = [
  {
    path: 'produtos',
    component: ListaProdutosComponent,
  },
  {
    path: 'clientes',
    component: ListaClientesComponent,
  },
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
];
