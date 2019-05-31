import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminValidationComponent } from './admin-validation.component';

describe('AdminValidationComponent', () => {
  let component: AdminValidationComponent;
  let fixture: ComponentFixture<AdminValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
