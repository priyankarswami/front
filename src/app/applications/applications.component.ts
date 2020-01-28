import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  apps:any;

  constructor(public service:UserService ) {
    this.getData();
  }

  getData(){

    this.service.Select().subscribe((res)=>{
      console.log(res);
      this.apps=res;
    },(error)=>{
      console.log(error)
    })
  }
  ngOnInit() {
  }

}
