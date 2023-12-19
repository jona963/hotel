import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaUsuarioComponent } from './tarea-usuario.component';

describe('TareaUsuarioComponent', () => {
  let component: TareaUsuarioComponent;
  let fixture: ComponentFixture<TareaUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareaUsuarioComponent]
    });
    fixture = TestBed.createComponent(TareaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
