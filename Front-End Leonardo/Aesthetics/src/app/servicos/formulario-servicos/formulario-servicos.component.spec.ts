import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioServicosComponent } from './formulario-servicos.component';

describe('FormularioServicosComponent', () => {
  let component: FormularioServicosComponent;
  let fixture: ComponentFixture<FormularioServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioServicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
