import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaAdminComponent } from './tarea-admin.component';

describe('TareaAdminComponent', () => {
  let component: TareaAdminComponent;
  let fixture: ComponentFixture<TareaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareaAdminComponent]
    });
    fixture = TestBed.createComponent(TareaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
