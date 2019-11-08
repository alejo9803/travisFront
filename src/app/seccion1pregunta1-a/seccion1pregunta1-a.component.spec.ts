import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion1pregunta1AComponent } from './seccion1pregunta1-a.component';

describe('Seccion1pregunta1AComponent', () => {
  let component: Seccion1pregunta1AComponent;
  let fixture: ComponentFixture<Seccion1pregunta1AComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seccion1pregunta1AComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion1pregunta1AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
