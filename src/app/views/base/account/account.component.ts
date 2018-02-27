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
    this.loadData();
  }

  loadData(){
    this.dataService.getManage()
    .subscribe( data => {
      // console.log('account data',data["data"]["data"]);
      this.data=data["data"]["data"];
    })
   
  }

  addAccount(id,postCode,email,phone,hours,rHours,password,fname,lname){
    this.dataService.addAccount(id,postCode,email,phone,hours,rHours,password,fname,lname)
    .subscribe(data=>{
      console.log('data',data);
      this.loadData();
    })
  }
}


