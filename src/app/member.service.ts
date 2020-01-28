import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MemberService {
 
  url = "http://192.168.43.71:8080/jan14_hackathon";

  constructor(private http:HttpClient) { }
  
  GetAllMembers() {
    console.log("ul")
   return this.http.get(this.url+"/users/display");
  }

  SelectMemberByNo(id:any) {
    return this.http.get(this.url+"/users/editProfile?id="+id);
  }
  EditMember(user)
  {

  }
  UpdateMember(member: any) {
    return this.http.put(this.url+"/users/editProfile", member);
  }
}
