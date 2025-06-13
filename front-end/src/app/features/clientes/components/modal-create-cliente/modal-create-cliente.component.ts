import { Component, EventEmitter, Output } from '@angular/core';
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
import { ClienteService } from '../../services/cliente.service';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-modal-create-cliente',
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
  templateUrl: './modal-create-cliente.component.html',
})
export class ModalCreateClienteComponent {
  @Output() clienteCriado = new EventEmitter<void>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private clienteService: ClienteService) {
    this.form = this.fb.group({
      nome: this.fb.control<string>('', [Validators.required]),
      email: this.fb.control<string>('', [
        Validators.required,
        Validators.email,
      ]),
      telefone: this.fb.control<string>('', [Validators.required]),
      endereco: this.fb.control<string>('', [Validators.required]),
    });
  }

  onSubmit(event: Event, ctx: { close: () => void }): void {
    event.preventDefault();

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.form.valid) {
      const formValue = this.form.value;

      this.clienteService.createCliente(formValue).subscribe({
        next: () => {
          this.form.reset();
          toast.success('Cliente criado com sucesso!');
          this.clienteCriado.emit();
          ctx.close();
        },
        error: (err) => {
          console.error('Erro ao criar cliente:', err);
          toast.error('Erro ao criar cliente. Tente novamente.');
        },
      });
    }
  }
}
