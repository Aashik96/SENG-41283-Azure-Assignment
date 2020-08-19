import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPermanentProductsComponent } from './view-permanent-products.component';

describe('ViewPermanentProductsComponent', () => {
  let component: ViewPermanentProductsComponent;
  let fixture: ComponentFixture<ViewPermanentProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPermanentProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPermanentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
