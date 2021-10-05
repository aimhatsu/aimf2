import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalPage } from './form-modal.page';

describe('FormModalPage', () => {
  let component: FormModalPage;
  let fixture: ComponentFixture<FormModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
