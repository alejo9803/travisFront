import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prediccion3seccion1Component } from './prediccion3seccion1.component';

describe('Prediccion3seccion1Component', () => {
  let component: Prediccion3seccion1Component;
  let fixture: ComponentFixture<Prediccion3seccion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prediccion3seccion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prediccion3seccion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
