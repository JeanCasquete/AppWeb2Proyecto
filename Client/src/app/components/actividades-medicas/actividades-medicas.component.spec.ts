import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesMedicasComponent } from './actividades-medicas.component';

describe('ActividadesMedicasComponent', () => {
  let component: ActividadesMedicasComponent;
  let fixture: ComponentFixture<ActividadesMedicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActividadesMedicasComponent]
    });
    fixture = TestBed.createComponent(ActividadesMedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
