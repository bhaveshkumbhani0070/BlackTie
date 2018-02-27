import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { DataService } from '../../data.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {


  data :any;
  id:string;
  postCode:string;
  email:string;
  phone:string;
  hours:string;
  rHours:string;
  password:string;
  fname:string;
  lname:string;
  idd:string;
  typee:string;

  constructor(
    private dataService:DataService,
  ) { }

  addAccount(id,postCode,email,phone,hours,rHours,password,fname,lname){
    this.dataService.addAccount(id,postCode,email,phone,hours,rHours,password,fname,lname)
    .subscribe(data=>{
      console.log('data',data);
    })
  }
  addMe(idd,typee){
    this.dataService.addNotification(idd,typee) 
     .subscribe(data => {
       // console.log('addNotification',data);
     });
   }
}
