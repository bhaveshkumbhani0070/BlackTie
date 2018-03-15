import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { OrderModule } from 'ngx-order-pipe';
@Component({
  selector: 'app-account-request',
  templateUrl: './account-request.component.html',
  styleUrls: ['./account-request.component.scss']
})

export class AccountRequestComponent implements OnInit {

  data:any;

  constructor(
    private http: HttpClient,
    private dataService:DataService
  ) {
  
   }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.dataService.getNewAccountReq()
    .subscribe( data => {
      console.log('New Account request',data);
      localStorage.setItem('totalAccReq', data["data"]["data"]["length"]);
      this.data=data["data"]["data"];
    })
  }
}

