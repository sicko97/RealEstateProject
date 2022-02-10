import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjsonComponent } from './addjson.component';

describe('AddjsonComponent', () => {
  let component: AddjsonComponent;
  let fixture: ComponentFixture<AddjsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddjsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
