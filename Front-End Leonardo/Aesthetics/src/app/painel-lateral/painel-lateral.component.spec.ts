import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelLateralComponent } from './painel-lateral.component';

describe('PainelLateralComponent', () => {
  let component: PainelLateralComponent;
  let fixture: ComponentFixture<PainelLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelLateralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
