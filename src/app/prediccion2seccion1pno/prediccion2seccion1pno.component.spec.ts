import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prediccion2seccion1pnoComponent } from './prediccion2seccion1pno.component';

describe('Prediccion2seccion1pnoComponent', () => {
  let component: Prediccion2seccion1pnoComponent;
  let fixture: ComponentFixture<Prediccion2seccion1pnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prediccion2seccion1pnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prediccion2seccion1pnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
