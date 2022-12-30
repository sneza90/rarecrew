
export interface Data {
    Id: number;
    EmployeeName: string;
    StarTimeUtc: any;
    EndTimeUtc:any;
    EntryNotes:string;
    DeletedOn:boolean;
  }
/*
  export class Employee {
    constructor(
      public Id: string,
      public EmployeeName: string,
      public StarTimeUtc: any,
      public EndTimeUtc: any,
      public EntryNotes: string,
      public DeletedOn: boolean,
      public Hours: any
    ) { }
  }

import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';

  @Component({
    selector: 'app-employee',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class EmployeeComponent implements OnInit {

   private EmployeeComponent.Employee: Employee[];
    
    constructor(private httpClient: HttpClient) { }
  
    ngOnInit() {
      this.getEmployees();
    }
      
        getEmployees(){
  // I just put here something random for url of Api endpoint, because I don't want someone to put Http Request on their open Api..
          this.httpClient.get<any>('http://localhost:4200/random').subscribe(
            response => {
              console.log(response);
              this.employees = response;
            }
          );
        }
      }

*/
