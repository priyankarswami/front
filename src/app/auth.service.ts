import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthdataService } from './authdata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements CanActivate
 {
  
  constructor(private authdata: AuthdataService, private router:Router) 
  { }
  
  ValidateUser(user)
  {
    var valid :any;
    var dbuser:any={};
    console.log("auth")
    console.log(user);

    let observableResult=  this.authdata.ValidateUser(user);

    observableResult.subscribe((result)=>{
    
    console.log("auth res");
    console.log(result);
    
    dbuser = result;
    });

    if(dbuser !== undefined)
    {
      console.log(user);
      window.sessionStorage.setItem("isActive", "1");
      window.sessionStorage.setItem("user", user.name);
      return true;
    }
    else
    {
      return false;
    }
  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) 
  {
    if(this.IsLoggedIn())
    {
      console.log("user has logged in ");
      return true;
    }
    else
    {
      console.log("user has not logged in ");
      this.router.navigate(['login']);
      return false;
    }
  }

  IsLoggedIn()
  {
    if(window.sessionStorage.getItem('active')!=null
        && window.sessionStorage.getItem('active')=="1")
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  Login(userdetails)
  {
    if(userdetails.uname == "abc" && userdetails.password == "abc@123")
    {
      console.log("login successful")
      window.sessionStorage.setItem('active',"1");
      return true;
      
    }
    else
    {
      return false;
    }
  }

  Logout()
  {
    window.sessionStorage.setItem('active',"0");
    this.router.navigate(['/login']);
  }
}
