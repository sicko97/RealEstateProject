import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddagencyComponent } from './addagency.component';

describe('AddagencyComponent', () => {
  let component: AddagencyComponent;
  let fixture: ComponentFixture<AddagencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddagencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddagencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
