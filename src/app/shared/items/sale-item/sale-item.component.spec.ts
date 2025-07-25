import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleItemComponent } from './sale-item.component';

describe('SaleItemComponent', () => {
  let component: SaleItemComponent;
  let fixture: ComponentFixture<SaleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
