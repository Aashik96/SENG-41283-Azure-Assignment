import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTemporaryProductComponent } from './add-temporary-product.component';

describe('AddTemporaryProductComponent', () => {
  let component: AddTemporaryProductComponent;
  let fixture: ComponentFixture<AddTemporaryProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTemporaryProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTemporaryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
