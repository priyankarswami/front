import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookwisecopiesreportComponent } from './bookwisecopiesreport.component';

describe('BookwisecopiesreportComponent', () => {
  let component: BookwisecopiesreportComponent;
  let fixture: ComponentFixture<BookwisecopiesreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookwisecopiesreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookwisecopiesreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
