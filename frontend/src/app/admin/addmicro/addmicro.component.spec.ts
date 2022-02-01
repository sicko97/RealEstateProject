import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmicroComponent } from './addmicro.component';

describe('AddmicroComponent', () => {
  let component: AddmicroComponent;
  let fixture: ComponentFixture<AddmicroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmicroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
