import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookavailabilityComponent } from './bookavailability.component';

describe('BookavailabilityComponent', () => {
  let component: BookavailabilityComponent;
  let fixture: ComponentFixture<BookavailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookavailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
