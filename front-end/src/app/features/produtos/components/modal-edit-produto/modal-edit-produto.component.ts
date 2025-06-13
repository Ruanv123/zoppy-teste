import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
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
  HlmDialogTitleDirective,
} from '@spartan-ng/helm/dialog';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-modal-edit-produto',
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
  templateUrl: './modal-edit-produto.component.html',
})
export class ModalEditProdutoComponent {
  private _produto: Produto = {} as Produto;
  @Output() produtoEditado = new EventEmitter<void>();
  form: FormGroup;

  @Input() set produto(value: Produto) {
    this._produto = value;
    if (value) {
      this.form.patchValue(value);
    }
  }

  get produto(): Produto {
    return this._produto;
  }

  constructor(private fb: FormBuilder, private produtoService: ProdutoService) {
    this.form = this.fb.group({
      nome: this.fb.control('', []),
      descricao: this.fb.control('', []),
      preco: this.fb.control<number | null>(null, [Validators.min(0)]),
      estoque: this.fb.control<number | null>(null, [Validators.min(0)]),
    });
  }

  onSubmit(event: Event, ctx: { close: () => void }): void {
    event.preventDefault();

    if (this.form.invalid || !this.produto?.id) {
      this.form.markAllAsTouched();
      return;
    }

    const original = this.produto;
    const current = this.form.value;

    const updatedFields: Partial<Produto> = {};
    for (const key in current) {
      if (current[key as keyof Produto] !== original[key as keyof Produto]) {
        updatedFields[key as keyof Produto] = current[key as keyof Produto];
      }
    }

    if (Object.keys(updatedFields).length === 0) {
      toast.info('Nenhuma alteração detectada.');
      return;
    }

    const updatePayload = { ...updatedFields, id: original.id };

    this.produtoService.updateProduto(updatePayload).subscribe({
      next: () => {
        this.form.reset();
        toast.success('Produto editado com sucesso!');
        this.produtoEditado.emit();
        ctx.close();
      },
      error: (error) => {
        console.error('Erro ao editar produto:', error);
        toast.error('Erro ao salvar produto. Tente novamente.');
      },
    });
  }
}
