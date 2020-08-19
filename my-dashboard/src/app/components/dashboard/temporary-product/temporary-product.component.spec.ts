import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryProductComponent } from './temporary-product.component';

describe('TemporaryProductComponent', () => {
  let component: TemporaryProductComponent;
  let fixture: ComponentFixture<TemporaryProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporaryProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
