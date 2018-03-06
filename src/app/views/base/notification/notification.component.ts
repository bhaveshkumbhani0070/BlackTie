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
  client="all";
  allClient=[];

  constructor(
    private http: HttpClient,
    private dataService:DataService,
    private authenticationService:AuthenticationService
  ) { }

  ngOnInit() {
    this.loadData();
    this.loadManage();
  }

  loadData(){
    this.dataService.getNotification()
    .subscribe(d => {
       console.log('getNotification',d["data"]["data"]);
       localStorage.setItem('totalNotification', d["data"]["data"]["length"]);
       this.data=d["data"]["data"];
    });

  }
  loadManage(){
    this.dataService.getManage()
    .subscribe( data => {
      console.log('Manage data',data["data"]["data"]);
      if(data["data"]["data"].length>0){
        for(let i=0;i<data["data"]["data"].length;i++){
          this.allClient.push(data["data"]["data"][i]["client_id"])
        }
      }
    })
  }

  addMe(){
    if(this.client=="all"){
      this.dataService.addNotification(this.allClient,this.type) 
      .subscribe(data => {
        console.log('All data',data);
        this.type="";
        this.loadData();
      });
    }
    else{
      this.dataService.addNotification([this.id],this.type) 
      .subscribe(data => {
        console.log('single ',data);
        this.type="";
        this.loadData();
      });
    }
  }
}
