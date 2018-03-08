import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { OrderModule } from 'ngx-order-pipe';

@Component({
  selector: 'app-manage-request',
  templateUrl: './manage-request.component.html',
  styleUrls: ['./manage-request.component.scss']
})

export class ManageRequestComponent implements OnInit {

  data:any;
  client_id:string="";
  flight_from:string;
  flight_to:string;
  flight_type:string="";
  plane_type:string;
  number_of_passengers:string;
  date_time:string;
  return_date_time:string;
  client_ids=[];

  constructor(
    private http: HttpClient,
    private dataService:DataService
  ) {
  
   }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.dataService.getManage()
    .subscribe( data => {
      console.log('New Account request',data);
      this.client_ids=data["data"]["data"];
      // this.data=data["data"]["data"];
    })
  }

  addRequest(status){
  // client_id,flight_from,flight_to,flight_type,plane_type,number_of_passengers,date_time,return_date_time,request_type
  this.dataService.addFlightReq(this.client_id,this.flight_from,this.flight_to,this.flight_type,this.plane_type,this.number_of_passengers,this.date_time,this.return_date_time,status)
  .subscribe( data => {
    this.client_id="";
    this.flight_from="";
    this.flight_to="";
    this.flight_type="";
    this.plane_type="";
    this.number_of_passengers="";
    this.date_time="";
    this.return_date_time="";
    console.log('Manage request is created',status, data);
  })
  }
}

