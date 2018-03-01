import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { AuthenticationService } from '../../../authentication.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  
  data:any;
  hours:string;
  rHours:string;
  id:string;

  constructor(
    private dataService:DataService,
    private authenticationService:AuthenticationService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.dataService.getManage()
    .subscribe( data => {
      // console.log('Manage data',data["data"]["data"]);
      localStorage.setItem('totalManagement', data["data"]["data"]["length"]);
      this.data=data["data"]["data"];
    })
  }

  updateId(d){
    this.id=d.client_id;
    this.hours=d.total_package_hours;
    this.rHours=d.remaining_hours;
  }
  UpdateMe(){
    this.dataService.updateManage(this.id,this.hours,this.rHours)
    .subscribe(data=>{
      this.hours="";
      this.rHours="";
      this.loadData();
    })
  }
}
