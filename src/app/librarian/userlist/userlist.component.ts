import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/member.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  members:any;

  constructor(private ms:MemberService) { }

  ngOnInit() {
    
    let observableResult=  this.ms.GetAllMembers();

    console.log("ul")
    observableResult.subscribe((result)=>{

    this.members = result;
    console.log(this.members)
    });





  }





}
