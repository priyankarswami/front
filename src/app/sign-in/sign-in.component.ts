import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email:any;
  password:any;
  message;


  constructor(private auth:AuthService, private router:Router,private userService:UserService) 
  { }

  ngOnInit() {
  
  }

  SignIn(formdata)
  {
    let data = formdata.form.value;

    if (data.uname == 0) {
      alert('enter email');
    } else if (data.password ==0) {
      alert('enter password');
    } else {
this.userService.Login(data.uname,data.password).subscribe(res=>{


  this.router.navigate(['student']);
},(err=>{
  this.message="Invalid email or password";
})
)
     
      
}

  }
  GoSignUp()
  {
    this.router.navigate(['/signup']);
  }

}
