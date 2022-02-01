import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmicroFormComponent } from './addmicro-form.component';

describe('AddmicroFormComponent', () => {
  let component: AddmicroFormComponent;
  let fixture: ComponentFixture<AddmicroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmicroFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmicroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
