import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbookcopyComponent } from './newbookcopy.component';

describe('NewbookcopyComponent', () => {
  let component: NewbookcopyComponent;
  let fixture: ComponentFixture<NewbookcopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbookcopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbookcopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
