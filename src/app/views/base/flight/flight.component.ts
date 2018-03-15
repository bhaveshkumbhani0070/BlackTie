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
  statuses=["completed", "upcoming", "requested"];
  aleData: any[] = [];

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
  onChange(d,selected){
    console.log('data',d.id,selected);
    this.dataService.updateFlight(d.id,selected)
    .subscribe( data => {
        console.log('updated flight',data);
        this.aleData.push({
          type: 'info',
          msg: 'The status of your flight enquiry has been updated. Please check My Bookings section in Blacktie App',
          timeout: 5000
        });
    })
    this.dataService.addNotification([d.client_id],"Status update by admin") 
      .subscribe(data => {
        console.log('Notification send to client');
        this.loadData();
      });
  }
}

