import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProfissionaisComponent } from './formulario-profissionais.component';

describe('FormularioProfissionaisComponent', () => {
  let component: FormularioProfissionaisComponent;
  let fixture: ComponentFixture<FormularioProfissionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioProfissionaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
