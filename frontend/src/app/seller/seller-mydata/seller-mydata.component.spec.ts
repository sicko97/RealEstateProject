import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerMydataComponent } from './seller-mydata.component';

describe('SellerMydataComponent', () => {
  let component: SellerMydataComponent;
  let fixture: ComponentFixture<SellerMydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerMydataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerMydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
