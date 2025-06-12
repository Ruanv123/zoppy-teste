import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaClienteComponent } from './detalha-cliente.component';

describe('DetalhaClienteComponent', () => {
  let component: DetalhaClienteComponent;
  let fixture: ComponentFixture<DetalhaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhaClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
