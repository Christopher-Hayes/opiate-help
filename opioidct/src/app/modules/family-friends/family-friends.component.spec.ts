import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyFriendsComponent } from './family-friends.component';

describe('FamilyFriendsComponent', () => {
  let component: FamilyFriendsComponent;
  let fixture: ComponentFixture<FamilyFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
