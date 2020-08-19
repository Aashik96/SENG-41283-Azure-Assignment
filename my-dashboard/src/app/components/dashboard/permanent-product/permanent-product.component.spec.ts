import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentProductComponent } from './permanent-product.component';

describe('PermanentProductComponent', () => {
  let component: PermanentProductComponent;
  let fixture: ComponentFixture<PermanentProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanentProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
