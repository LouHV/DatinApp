import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestErrorsComponent } from './test-errors.component';

describe('TestErrorsComponent', () => {
  let component: TestErrorsComponent;
  let fixture: ComponentFixture<TestErrorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestErrorsComponent]
    });
    fixture = TestBed.createComponent(TestErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
