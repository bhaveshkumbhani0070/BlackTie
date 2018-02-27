import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { DataService } from '../../../data.service';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

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
    this.dataService.getAppWorks()
    .subscribe(data => {
      console.log('howitworks data',data);
      this.data=data;
    });
  }

  deleteMe(id){
    this.dataService.deleteAppWorks(id)
    .subscribe(data => {
      this.loadData();
    });
  }

  AddMe(title,description){
    this.dataService.addAppWorks(title,description)
    .subscribe(data => {
      console.log('data',data);
      this.loadData();
    });
  }
}
