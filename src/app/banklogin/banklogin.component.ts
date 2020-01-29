import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-banklogin',
  templateUrl: './banklogin.component.html',
  styleUrls: ['./banklogin.component.css']
})
export class BankloginComponent implements OnInit 
{

  email:any;
  password:any;
  role:any;
  message

  constructor(private auth:AuthService, private router:Router,private userService:UserService) { }

      ngOnInit() 
      {

      }

  SignIn(formdata)
  {
    let data = formdata.form.value;

    if (data.email == 0) 
    {
      alert('enter email');
    } else if (data.password ==0) 
    {
      alert('enter password');
    } else 
    {
        this.userService.Login(data.email,data.password).subscribe
        (res=>
          {
                this.router.navigate(['bank']);
          },(err=>
          {
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
