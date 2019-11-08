import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prediccion3seccion1pnoComponent } from './prediccion3seccion1pno.component';

describe('Prediccion3seccion1pnoComponent', () => {
  let component: Prediccion3seccion1pnoComponent;
  let fixture: ComponentFixture<Prediccion3seccion1pnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prediccion3seccion1pnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prediccion3seccion1pnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
