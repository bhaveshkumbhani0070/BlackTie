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
  postCode:string;
  email:string;
  phone:string;
  hours:string;
  rHours:string;
  password:string;
  fname:string;
  lname:string;

  constructor(
    private dataService:DataService,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.dataService.getManage()
    .subscribe( data => {
      console.log('account data',data["data"]["data"]);
      this.data=data["data"]["data"];
    })
   
  }

  addAccount(){
    this.dataService.addAccount(this.email,this.phone,this.hours,this.rHours,"password",this.fname,this.lname)
    .subscribe(data=>{
      console.log('data',data);
      this.loadData();
    })
  }
}


