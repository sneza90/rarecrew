import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, reduce, Timestamp } from 'rxjs';


@Injectable ({
    providedIn: 'root'
})
export class UserService {

    constructor(private http:HttpClient) {}

    getData()
    {
        let url="https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==";
        return this.http.get(url);
    }
}

/*
import {Employee} from '../entity/Employee';
import { style } from '@angular/animations';
@Injectable ({
    providedIn: 'root'
})
export class EmployeeService {
    allEmployees:Employee[] = [
        {
        "id":"25768d9f-502a-4776-8796-c26d76d6a6eb",
        "EmployeeName":"Abhay Singh",
        "StarTimeUtc":"2022-02-22T14:15:00",
        "EndTimeUtc":"2022-02-22T12:01:00",
        "EntryNotes":"working on project Take-Two Interactive",
        "DeletedOn":null}
        }
    };
    getAllEmployees():Employee[]{
        return.this.allEmployees;
    }
}
addEmployee(employee:Employee){
    this.allEmployees.push(employee);
}
updateEmployee(employee:Employee){
    var updateEmployee = this.allEmployees.find(user => user.id == Employee.id);
    updateEmployee.EmployeeName = Employee.EmployeeName;
    updateEmployee.StarTimeUtc = Employee.StarTimeUtc;
    updateEmployee.EndTimeUtc = Employee.EndTimeUtc;
    updateEmployee.EntryNotes = Employee.EntryNotes;
    updateEmployee.DeletedOn = Employee.DeletedOn;
}
tr ng-repeat="list in results"
td ng-class='{red : list.changeColor, black: !list.changeColor}'>{{list.value}}</td>
<td>{{>100}}</td>
</tr>
<style type="text/css">
.red {
    color: red; 
}

.black {
    color: black;
}
</style>
//// */