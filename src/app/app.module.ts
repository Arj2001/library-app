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

const addRoutes:Routes = [
  {path:"",component:AddLibraryComponent},
  {
    path:"view-library",component:ViewLibraryComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddLibraryComponent,
    ViewLibraryComponent
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
