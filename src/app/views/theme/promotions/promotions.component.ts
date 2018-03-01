import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  data:any;
  description:string;
  validity:string;
  
  constructor(
    private http: HttpClient,
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.dataService.getAppPromotions()
    .subscribe(data => {
      // console.log('slider data',data);
      this.data=data;
    });
  }
  deleteMe(id){
    this.dataService.deleteAppPromotions(id)
    .subscribe(data => {
      this.loadData();
    });
  }
  AddMe(){
   this.dataService.addAppPromotions(this.description,this.validity)
    .subscribe(data => {
      // console.log('data',data);
      this.description="";
      this.validity="";
      this.loadData();
    });
  }
}
