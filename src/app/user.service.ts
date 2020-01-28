import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private helper:HttpClient) { }

  Select()
{
  console.log("select called");
  return this.helper.get("http://localhost:8087/LoanMangtSystem/banks");
}

Login(uname,password)
{
  console.log("select called");
  let data = {
    "email":uname,
    "password":password
  }
  return this.helper.post("http://localhost:8087/LoanMangtSystem/students/login",data);
}
RegisterStudent(data){
  return this.helper.post("http://localhost:8087/LoanMangtSystem/students/",data);
}
Insert(appObj)
  {
    return this.helper.post("http://localhost:8087/LoanMangtSystem/banks",appObj);
  }


  Delete1(bId)
{
  return this.helper.delete("http://localhost:8087/LoanMangtSystem/banks"+"/"+bId);
}
}
