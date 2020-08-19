import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTemporaryProductsComponent } from './view-temporary-products.component';

describe('ViewTemporaryProductsComponent', () => {
  let component: ViewTemporaryProductsComponent;
  let fixture: ComponentFixture<ViewTemporaryProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTemporaryProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTemporaryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
