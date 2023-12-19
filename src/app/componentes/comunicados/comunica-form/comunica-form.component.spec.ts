import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicaFormComponent } from './comunica-form.component';

describe('ComunicaFormComponent', () => {
  let component: ComunicaFormComponent;
  let fixture: ComponentFixture<ComunicaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComunicaFormComponent]
    });
    fixture = TestBed.createComponent(ComunicaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
