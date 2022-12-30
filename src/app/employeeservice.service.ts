import { Injectable } from "@angular/core";
import { Employee } from "./employee";

@Injectable({
    providedIn:'root'
})
export class EmployeeService {

    allEmployees:Employee[] = [
        {
            "Id":"25768d9f-502a-4776-8796-c26d76d6a6eb",
            "EmployeeName":"Abhay Singh",
            "StarTimeUtc":"2022-02-22T14:15:00",
            "EndTimeUtc":"2022-02-22T12:01:00",
            "EntryNotes":"working on project Take-Two Interactive",
            "DeletedOn": "null"
    }
    ]
    };
