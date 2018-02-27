import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

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
    this.dataService.getFlight()
    .subscribe( data => {
      console.log('Flight Data',data["data"]["data"]);
      this.data=data["data"]["data"];
    })
    // this.http.get('http://13.127.126.229/api/request/flights/', {
    //   headers: {
    //     "content-type": "application/json",
    //     "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRfaWQiOiIwMDAxNiJ9.eD4vKBcGOKnyBbIlms2ictmmYtbJyIEDVN_zsnZelW8"
    //   }
    // })
    // .subscribe(d => {
    //    console.log('data',d);
    //    this.data=d;
    // });

  }
}

