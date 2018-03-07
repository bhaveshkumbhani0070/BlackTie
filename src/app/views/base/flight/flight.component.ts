import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { OrderModule } from 'ngx-order-pipe';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  data:any;
  selectedDevice="two";
  statuses=["completed", "upcoming", "requested"];

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
      localStorage.setItem('totalFlight', data["data"]["data"]["length"]);
      this.data=data["data"]["data"];
    })
  }
  onChange(selected){
    console.log('data',selected);
    this.dataService.updateFlight(selected)
    .subscribe( data => {
        console.log('updated flight',data);
    })
  }
}

