import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalNavBarComponent } from './horizontal-nav-bar.component';

describe('HorizontalNavBarComponent', () => {
  let component: HorizontalNavBarComponent;
  let fixture: ComponentFixture<HorizontalNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
