import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddictsComponent } from './addicts.component';

describe('AddictsComponent', () => {
  let component: AddictsComponent;
  let fixture: ComponentFixture<AddictsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddictsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
