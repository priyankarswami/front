import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent implements OnInit {

  books:any;

  constructor() { }

  ngOnInit() {
  this.books=[{"id":1,"name":"C PROG","author":"DENNIS RITCHIE","subject":"C PROGRAMMING","price":1200,"isbn":"2522GTG"}];
  
  }

}
