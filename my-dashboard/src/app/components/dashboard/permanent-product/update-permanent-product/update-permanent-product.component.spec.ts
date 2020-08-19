import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePermanentProductComponent } from './update-permanent-product.component';

describe('UpdatePermanentProductComponent', () => {
  let component: UpdatePermanentProductComponent;
  let fixture: ComponentFixture<UpdatePermanentProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePermanentProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePermanentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
