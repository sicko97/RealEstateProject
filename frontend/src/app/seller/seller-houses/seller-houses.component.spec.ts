import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerHousesComponent } from './seller-houses.component';

describe('SellerHousesComponent', () => {
  let component: SellerHousesComponent;
  let fixture: ComponentFixture<SellerHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerHousesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
