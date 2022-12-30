import { Component } from '@angular/core';
import { from, NEVER } from 'rxjs';
import { AppModule } from './app.module';
import {UserService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RareCrew';
  data=[];
constructor(private user: UserService){

  this.user.getData().subscribe(data1=>{
      console.warn(data1)
      this.data=<never []>data1
      
    })
     }
}

