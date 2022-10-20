import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getBooks=()=>{
    return this.http.get("http://localhost:8080/viewLibrary")
  }
  postBooks=(data:any)=>{
    return this.http.post("http://localhost:8080/addLibrary",data)
  }
  deleteBook=(id:any)=>{
    return this.http.post("http://localhost:8080/deleteLibrary",id)
  }
}
