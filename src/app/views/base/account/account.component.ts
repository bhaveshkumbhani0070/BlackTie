import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  data :any;
  id:string;
  postCode:string;
  email:string;
  phone:string;
  hours:string;
  rHours:string;
  
  constructor(
    private dataService:DataService,
  ) { }

  ngOnInit() {
    // this.loadData();
  }

  loadData(){
    this.dataService.getAccount()
    .subscribe( data => {
      this.data=data["data"]["data"];
    })
   
  }

  addAccount(id,postCode,email,phone,hours,rHours){
    this.dataService.addAccount(id,postCode,email,phone,hours,rHours)
    .subscribe(data=>{
      // this.loadData();
    })
  }
}
