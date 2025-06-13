import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditProdutoComponent } from './modal-edit-produto.component';

describe('ModalEditProdutoComponent', () => {
  let component: ModalEditProdutoComponent;
  let fixture: ComponentFixture<ModalEditProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
