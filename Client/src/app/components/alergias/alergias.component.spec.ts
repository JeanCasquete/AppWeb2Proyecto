import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergiasComponent } from './alergias.component';

describe('AlergiasComponent', () => {
  let component: AlergiasComponent;
  let fixture: ComponentFixture<AlergiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlergiasComponent]
    });
    fixture = TestBed.createComponent(AlergiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
