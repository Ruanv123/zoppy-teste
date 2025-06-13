import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  BrnDialogContentDirective,
  BrnDialogTriggerDirective,
} from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogDescriptionDirective,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent,
  HlmDialogService,
  HlmDialogTitleDirective,
} from '@spartan-ng/helm/dialog';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { toast } from 'ngx-sonner';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-modal-produtos',
  imports: [
    BrnDialogTriggerDirective,
    BrnDialogContentDirective,

    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
    HlmDialogTitleDirective,
    HlmDialogDescriptionDirective,

    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    ReactiveFormsModule,
  ],
  templateUrl: './modal-produtos.component.html',
})
export class ModalProdutosComponent {
  @Output() produtoCriado = new EventEmitter<void>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private produtoService: ProdutoService) {
    this.form = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      descricao: this.fb.control('', []),
      preco: this.fb.control<number | null>(null, [
        Validators.required,
        Validators.min(0),
      ]),
      estoque: this.fb.control<number | null>(null, [
        Validators.required,
        Validators.min(0),
      ]),
    });
  }

  onSubmit(event: Event, ctx: { close: () => void }): void {
    event.preventDefault();

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.form.valid) {
      const formValues = this.form.value;

      this.produtoService.createProduto(formValues).subscribe({
        next: (produto) => {
          this.form.reset();
          toast.success('Produto criado com sucesso!');
          this.produtoCriado.emit();
          ctx.close();
        },
        error: (error) => {
          console.error('Erro ao criar produto:', error);
          toast.error('Erro ao salvar produto. Tente novamente.');
        },
      });
    }
  }
}
