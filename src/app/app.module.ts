import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddLibraryComponent } from './add-library/add-library.component';
import { ViewLibraryComponent } from './view-library/view-library.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

const addRoutes:Routes = [
  {path:"",component:AddLibraryComponent},
  {
    path:"view-library",component:ViewLibraryComponent
  },
  {
    path:"search-library",component:SearchComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddLibraryComponent,
    ViewLibraryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(addRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
