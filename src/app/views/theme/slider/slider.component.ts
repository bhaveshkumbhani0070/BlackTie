import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slider:any;

  constructor(
    private http: HttpClient,
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.dataService.getAppSlider()
    .subscribe(data => {
      console.log('slider data',data);
      this.slider=data;
    });
  }

  deleteMe(id){
    this.dataService.deleteAppSlider(id)
    .subscribe(data => {
      this.loadData();
    });
  }

  AddMe(){
      console.log('add file ');
  }
}
