import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { DataService } from '../../../data.service';


@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  data:any;
  title:string;
  description:string;

  constructor(
    private http: HttpClient,
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.loadData();
  }
  
  loadData(){
    this.dataService.getAppTips()
    .subscribe(data => {
      // console.log('tips data',data);
      this.data=data;
    });
  }
  deleteMe(id){
    this.dataService.deleteAppTips(id)
    .subscribe(data => {
      this.loadData();
    });
  }

  AddMe(){
    this.dataService.addAppTips(this.title,this.description)
    .subscribe(data => {
      // console.log('data',data);
      this.title="";
      this.description="";
      this.loadData();
    });
  }
}
