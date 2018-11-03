import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeTreatmentComponent } from './alternative-treatment.component';

describe('AlternativeTreatmentComponent', () => {
  let component: AlternativeTreatmentComponent;
  let fixture: ComponentFixture<AlternativeTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativeTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
