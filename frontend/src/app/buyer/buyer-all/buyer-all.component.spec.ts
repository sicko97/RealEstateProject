import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerAllComponent } from './buyer-all.component';

describe('BuyerAllComponent', () => {
  let component: BuyerAllComponent;
  let fixture: ComponentFixture<BuyerAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
