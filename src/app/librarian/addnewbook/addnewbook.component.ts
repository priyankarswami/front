import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-addnewbook',
  templateUrl: './addnewbook.component.html',
  styleUrls: ['./addnewbook.component.css']
})
export class AddnewbookComponent implements OnInit {

  constructor(private bs:BookService) { }

  ngOnInit() {
  }
  AddBook(myform)
  {
    let book=myform.form.value;

    let rowsAff;

    let observableResult=  this.bs.Insert(book);

    observableResult.subscribe((result)=>{

    rowsAff = result;
    console.log(rowsAff)
    });





  }

}
