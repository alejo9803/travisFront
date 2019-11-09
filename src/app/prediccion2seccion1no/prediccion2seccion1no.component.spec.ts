import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prediccion2seccion1noComponent } from './prediccion2seccion1no.component';

describe('Prediccion2seccion1noComponent', () => {
  let component: Prediccion2seccion1noComponent;
  let fixture: ComponentFixture<Prediccion2seccion1noComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prediccion2seccion1noComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prediccion2seccion1noComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
