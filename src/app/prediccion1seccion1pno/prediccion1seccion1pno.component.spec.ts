import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prediccion1seccion1pnoComponent } from './prediccion1seccion1pno.component';

describe('Prediccion1seccion1pnoComponent', () => {
  let component: Prediccion1seccion1pnoComponent;
  let fixture: ComponentFixture<Prediccion1seccion1pnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prediccion1seccion1pnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prediccion1seccion1pnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
