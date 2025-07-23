import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPannelComponent } from './sidebar-pannel.component';

describe('SidebarPannelComponent', () => {
  let component: SidebarPannelComponent;
  let fixture: ComponentFixture<SidebarPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarPannelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
