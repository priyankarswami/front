import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthdataService {

  constructor(private http:HttpClient) { }

  url = "http://192.168.43.71:8080/jan14_hackathon";

  userar:any;

  ValidateUser(user: any):any
  {
    console.log("authdata")
    console.log(user);
    return this.userar = this.http.post(this.url+"/users/validate", user);
  }
}
