import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Employee } from '../entity/Employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employeeservice.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './employeedetail,component.html'
})
export class EmployeedetailComponent implements OnInit {

    employee: Employee;

constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) {}

ngOnInit() {
    var id = this.route.snapshot.params["id"];
    this.employee = this.employeeService.getEmployee(id);
}

updateEmployee(){
    this.employeeService.updateEmployee(this.employee);
    this.router.navigate(["Employees"]);
}
}