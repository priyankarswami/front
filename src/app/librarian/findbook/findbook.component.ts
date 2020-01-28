import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findbook',
  templateUrl: './findbook.component.html',
  styleUrls: ['./findbook.component.css']
})
export class FindbookComponent implements OnInit {

  books:any;

  constructor() { }

  ngOnInit() {
  this.books=[{"id":1,"name":"C PROG","author":"DENNIS RITCHIE","subject":"C PROGRAMMING","price":1200,"isbn":"2522GTG"}];
  
  }

}
