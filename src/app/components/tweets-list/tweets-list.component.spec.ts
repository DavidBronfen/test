import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TweetsListComponent } from './tweets-list.component';

describe('TweetsListComponent', () => {
  let component: TweetsListComponent;
  let fixture: ComponentFixture<TweetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TweetsListComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
