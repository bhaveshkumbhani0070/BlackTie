
import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { DataService } from '../../../data.service';
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {

  data:any;

  constructor(
    private http: HttpClient,
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.dataService.getPackage()
    .subscribe( data => {
      //now you have the data
      console.log('Package Data',data["data"]["data"]);
      this.data=data["data"]["data"];
    })
  }

  // 
}

