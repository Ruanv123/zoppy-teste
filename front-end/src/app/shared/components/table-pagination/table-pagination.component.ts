import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { HlmNumberedPaginationComponent } from '@spartan-ng/helm/pagination';

@Component({
  selector: 'app-table-pagination',
  standalone: true,
  imports: [CommonModule, HlmNumberedPaginationComponent],
  templateUrl: './table-pagination.component.html',
})
export class TablePaginationComponent {
  page = signal(1);
  pageSize = signal(10);
  totalProducts = signal(100);
}
