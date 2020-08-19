import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPermanentProductComponent } from './add-permanent-product.component';

describe('AddPermanentProductComponent', () => {
  let component: AddPermanentProductComponent;
  let fixture: ComponentFixture<AddPermanentProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPermanentProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPermanentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
