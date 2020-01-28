import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedbooklistandreturnComponent } from './issuedbooklistandreturn.component';

describe('IssuedbooklistandreturnComponent', () => {
  let component: IssuedbooklistandreturnComponent;
  let fixture: ComponentFixture<IssuedbooklistandreturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedbooklistandreturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedbooklistandreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
