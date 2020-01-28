import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectwisecopiesreportComponent } from './subjectwisecopiesreport.component';

describe('SubjectwisecopiesreportComponent', () => {
  let component: SubjectwisecopiesreportComponent;
  let fixture: ComponentFixture<SubjectwisecopiesreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectwisecopiesreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectwisecopiesreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
