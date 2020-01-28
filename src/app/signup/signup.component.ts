import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name;
  email;
  mobile;
  password;
  confirmPassword;

  constructor(private userService:UserService,private router:Router) { }

  SignUp()
  {
    let data = {
      "name":this.name,
      "mobile":this.mobile,
      "email":this.email,
      "password":this.password,
      "confirmPassword":this.confirmPassword
    }

    if(this.password==this.confirmPassword)
    {
      this.userService.RegisterStudent(data).subscribe(res=>{
        console.log(res);
        this.router.navigate(['signin']);
      })
    }else{
      alert("P and CP not same" );
    }
    }

   

  ngOnInit() {
  }

}
