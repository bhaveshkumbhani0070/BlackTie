import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { AuthenticationService } from '../../../authentication.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  
  data:any;

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
      console.log('Manage data',data["data"]["data"]);
      this.data=data["data"]["data"];
    })
  }
}
