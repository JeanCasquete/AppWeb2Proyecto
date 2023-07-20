import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasMedicasComponent } from './citas-medicas.component';

describe('CitasMedicasComponent', () => {
  let component: CitasMedicasComponent;
  let fixture: ComponentFixture<CitasMedicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasMedicasComponent]
    });
    fixture = TestBed.createComponent(CitasMedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
