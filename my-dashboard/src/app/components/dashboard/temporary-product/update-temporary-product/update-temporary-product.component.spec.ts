import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTemporaryProductComponent } from './update-temporary-product.component';

describe('UpdateTemporaryProductComponent', () => {
  let component: UpdateTemporaryProductComponent;
  let fixture: ComponentFixture<UpdateTemporaryProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTemporaryProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTemporaryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
