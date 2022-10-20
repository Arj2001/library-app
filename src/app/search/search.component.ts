import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  book_name = ""

  readValues=()=>{
    let data = {
      "book_name":this.book_name
    }
    console.log(data)
    this.myApi.searchBook(data).subscribe(
      (response)=>{
        this.bookData = response
      }
    )
  }

  bookData:any =[]

  ngOnInit(): void {
  }

}
