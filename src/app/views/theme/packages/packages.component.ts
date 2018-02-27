import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  data:any;
  id:string;
  hours:string;
  duration:string;
  cost:string;

  constructor(
    private http: HttpClient,
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.loadData();
  }
  
  loadData(){
    this.dataService.getAppPackage()
    .subscribe(data => {
      console.log('data',data);
      this.data=data;
    });
  }

  deleteMe(id){
    this.dataService.deleteAppPackage(id)
    .subscribe(data => {
      this.loadData();
    });
  }

  AddMe(id,hours,duration,cost){
    this.dataService.addAppPackage(id,hours,cost,duration)
    .subscribe(data => {
      console.log('data',data);
      this.loadData();
    });
  }
}
