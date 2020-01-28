import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedbooklistComponent } from './issuedbooklist.component';

describe('IssuedbooklistComponent', () => {
  let component: IssuedbooklistComponent;
  let fixture: ComponentFixture<IssuedbooklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedbooklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedbooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
