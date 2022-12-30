export class Employee {
    Id: string;
    EmployeeName: string;
    StarTimeUtc: any;
    EndTimeUtc: any;
    EntryNotes: string;
    DeletedOn: string;

    constructor (Id:string, 
        EmployeeName: string,
        StarTimeUtc: any,
        EndTimeUtc: any,
        EntryNotes: string,
        DeletedOn: string){
            this.Id = Id;
            this.EmployeeName = EmployeeName;
            this.StarTimeUtc = StarTimeUtc;
            this.EndTimeUtc = EndTimeUtc;
            this. EntryNotes =  EntryNotes;
            this.DeletedOn = DeletedOn;
        }
}