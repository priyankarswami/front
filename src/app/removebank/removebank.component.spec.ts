import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovebankComponent } from './removebank.component';

describe('RemovebankComponent', () => {
  let component: RemovebankComponent;
  let fixture: ComponentFixture<RemovebankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovebankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
