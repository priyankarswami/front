import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpaymentlistComponent } from './userpaymentlist.component';

describe('UserpaymentlistComponent', () => {
  let component: UserpaymentlistComponent;
  let fixture: ComponentFixture<UserpaymentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpaymentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpaymentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
