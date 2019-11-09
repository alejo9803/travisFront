import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prediccion4seccion1pnoComponent } from './prediccion4seccion1pno.component';

describe('Prediccion4seccion1pnoComponent', () => {
  let component: Prediccion4seccion1pnoComponent;
  let fixture: ComponentFixture<Prediccion4seccion1pnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prediccion4seccion1pnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prediccion4seccion1pnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
