import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addbank',
  templateUrl: './addbank.component.html',
  styleUrls: ['./addbank.component.css']
})
export class AddbankComponent implements OnInit {

  apps ={
    
  };

  constructor(private route:ActivatedRoute,
    public service:UserService,public router:Router,) { }
    Insert()
    {
      console.log(this.apps);
      let observableResult =this.service.Insert(this.apps);
      observableResult.subscribe((result)=>{
        console.log(result);
        this.router.navigate(['/admin/banklist']);
      });

    }

  ngOnInit() {

  }
    
}