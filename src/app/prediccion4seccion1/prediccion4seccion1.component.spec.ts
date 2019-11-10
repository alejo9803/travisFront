import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prediccion4seccion1Component } from './prediccion4seccion1.component';

describe('Prediccion4seccion1Component', () => {
  let component: Prediccion4seccion1Component;
  let fixture: ComponentFixture<Prediccion4seccion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prediccion4seccion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prediccion4seccion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
