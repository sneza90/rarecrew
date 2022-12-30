import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    
    /*
    EmployeedetailComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    EmployeeListComponent,
    */
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path:"Employees", component:EmployeeListComponent },
  { path:"AddEmployees", component:AddemployeeComponent },
  { path:"**", redirectTo: 'Employees' },
]
RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})
*/
