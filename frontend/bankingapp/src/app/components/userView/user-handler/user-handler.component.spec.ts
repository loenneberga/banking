import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHandlerComponent } from './user-handler.component';

describe('UserHandlerComponent', () => {
  let component: UserHandlerComponent;
  let fixture: ComponentFixture<UserHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
