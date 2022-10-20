import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-library',
  templateUrl: './view-library.component.html',
  styleUrls: ['./view-library.component.css']
})
export class ViewLibraryComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.putBookData()
  }

  putBookData=()=>{
    this.myApi.getBooks().subscribe(
      (data)=>{
        this.booksData = data
      }
    )
  }

  deleteBookData=(id: any)=>{
    let data = {
      "id":id
    }
    this.myApi.deleteBook(data).subscribe(
      (response)=>{

      }
    )
    this.putBookData()
  }

  booksData:any
  ngOnInit(): void {
  }

}
