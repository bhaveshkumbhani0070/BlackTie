import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { AuthenticationService } from '../../../authentication.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  data:any;
  id:string;
  type:string;

  constructor(
    private http: HttpClient,
    private dataService:DataService,
    private authenticationService:AuthenticationService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.dataService.getNotification()
    .subscribe(d => {
      //  console.log('getNotification',d["data"]["data"]);
       this.data=d["data"]["data"];
    });

  }

  addMe(id,type){
   this.dataService.addNotification(id,type) 
    .subscribe(data => {
      // console.log('addNotification',data);
      this.loadData();
    });
  }
}
