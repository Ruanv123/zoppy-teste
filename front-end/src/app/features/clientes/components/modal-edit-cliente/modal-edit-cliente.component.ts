import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-modal-edit-cliente',
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
  templateUrl: './modal-edit-cliente.component.html',
})
export class ModalEditClienteComponent {
  private _cliente: Cliente = {} as Cliente;
  @Output() clienteEditado = new EventEmitter<void>();
  form: FormGroup;

  @Input() set cliente(value: Cliente) {
    this._cliente = value;
    if (value) {
      this.form.patchValue(value);
    }
  }
  get cliente(): Cliente {
    return this._cliente;
  }

  constructor(private fb: FormBuilder, private clienteService: ClienteService) {
    this.form = this.fb.group({
      nome: this.fb.control<string>('', []),
      email: this.fb.control<string>('', []),
      telefone: this.fb.control<string>('', []),
      endereco: this.fb.control<string>('', []),
    });
  }

  onSubmit(event: Event, ctx: { close: () => void }): void {
    event.preventDefault();

    if (this.form.invalid || !this.cliente?.id) {
      this.form.markAllAsTouched();
      return;
    }

    const original = this._cliente;
    const current = this.form.value;

    const updatedFields: Partial<Cliente> = {};
    for (const key in current) {
      if (current[key as keyof Cliente] !== original[key as keyof Cliente]) {
        updatedFields[key as keyof Cliente] = current[key as keyof Cliente];
      }
    }

    if (Object.keys(updatedFields).length === 0) {
      toast.info('Nenhuma alteração detectada.');
      return;
    }

    const updatePayload = { ...updatedFields, id: original.id };

    this.clienteService.updateCliente(updatePayload).subscribe({
      next: () => {
        this.form.reset();
        toast.success('Cliente atualizado com sucesso!');
        this.clienteEditado.emit();
        ctx.close();
      },
      error: (err) => {
        console.error('Erro ao atualizar cliente:', err);
        toast.error('Erro ao atualizar cliente. Tente novamente.');
      },
    });
  }
}
