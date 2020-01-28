import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  url = "http://192.168.43.71:8080/jan14_hackathon";

  constructor(private http:HttpClient) { }

  Insert(book: any) {
    return this.http.post(this.url+"/books/addBook", book);
  }


}
