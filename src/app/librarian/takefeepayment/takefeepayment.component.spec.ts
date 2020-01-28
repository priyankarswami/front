import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakefeepaymentComponent } from './takefeepayment.component';

describe('TakefeepaymentComponent', () => {
  let component: TakefeepaymentComponent;
  let fixture: ComponentFixture<TakefeepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakefeepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakefeepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
