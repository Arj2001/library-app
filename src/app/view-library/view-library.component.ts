import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-library',
  templateUrl: './view-library.component.html',
  styleUrls: ['./view-library.component.css']
})
export class ViewLibraryComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.putFlightData()
   }

    putFlightData=()=>{
      this.myApi.getBooks().subscribe(
        (data)=>{
          this.booksData = data
        }
      )
    }

    booksData:any
  ngOnInit(): void {
  }

}
