import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateClienteComponent } from './modal-create-cliente.component';

describe('ModalCreateClienteComponent', () => {
  let component: ModalCreateClienteComponent;
  let fixture: ComponentFixture<ModalCreateClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreateClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
