import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-banklist',
  templateUrl: './banklist.component.html',
  styleUrls: ['./banklist.component.css']
})
export class BanklistComponent implements OnInit {
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

  Delete1(bId){
    const res = confirm("Are you sure want to delete emp with ID : "+bId);
    if(res==true){
      this.service.Delete1(bId).subscribe((res)=>{
        this.getData();
      })
    }
    
  }

  ngOnInit() {
  }

}
