import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrls: ['./add-library.component.css']
})
export class AddLibraryComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  book_name = ""
  author = ""
  language = ""
  published = ""

  readValues=()=>{
    let data = {
      "book_name":this.book_name,
    "author":this.author,
    "language":this.language,
    "published":this.published,
    }
    console.log(data)
    this.myApi.postBooks(data).subscribe(
      (response)=>{
        
      }
    )
    alert("Value inserted")
    this.book_name = ""
    this.author = ""
    this.language = ""
    this.published = ""
  }

  ngOnInit(): void {
  }

}
