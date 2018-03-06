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

  constructor(
    private http: HttpClient,
    private dataService:DataService
  ) {
  
   }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.dataService.getNewManageFlightReq()
    .subscribe( data => {
      console.log('New Account request',data);
      // localStorage.setItem('totalFlight', data["data"]["data"]["length"]);
      this.data=data["data"]["data"];
    })
  }
}

