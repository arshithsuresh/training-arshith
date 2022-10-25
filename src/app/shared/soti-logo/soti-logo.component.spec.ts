import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SotiLogoComponent } from './soti-logo.component';

describe('SotiLogoComponent', () => {
  let component: SotiLogoComponent;
  let fixture: ComponentFixture<SotiLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SotiLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SotiLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
