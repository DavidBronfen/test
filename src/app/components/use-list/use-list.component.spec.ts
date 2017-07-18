import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { UseListComponent } from './use-list.component';

describe('UseListComponent', () => {
  let component: UseListComponent;
  let fixture: ComponentFixture<UseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UseListComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
