import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutpagesPage } from './tutpages.page';

describe('TutpagesPage', () => {
  let component: TutpagesPage;
  let fixture: ComponentFixture<TutpagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutpagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutpagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
