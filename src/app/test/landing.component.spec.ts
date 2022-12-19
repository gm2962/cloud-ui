import { ComponentFixture, TestBed } from '@angular/core/testing';

import { test_module } from './landing';

describe('test_module', () => {
  let component: test_module;
  let fixture: ComponentFixture<test_module>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ test_module ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(test_module);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
