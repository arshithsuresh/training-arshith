import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarPalleteComponent } from './side-bar-pallete.component';

describe('SideBarPalleteComponent', () => {
  let component: SideBarPalleteComponent;
  let fixture: ComponentFixture<SideBarPalleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarPalleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarPalleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
