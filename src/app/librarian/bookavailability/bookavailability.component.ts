import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookavailability',
  templateUrl: './bookavailability.component.html',
  styleUrls: ['./bookavailability.component.css']
})
export class BookavailabilityComponent implements OnInit {

  copies: any;

  constructor() {
  }

  ngOnInit() {

    this.copies = [{ "id": 1, "bookid": 1, "rack": 1, "status": "available" }]
  }

}
