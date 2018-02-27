import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-airplane',
  templateUrl: './airplane.component.html',
  styleUrls: ['./airplane.component.scss']
})
export class AirplaneComponent implements OnInit {

  airplane:any;
  name:string;
  id:string;
  fileToUpload: File = null;
  public primaryModal;
  constructor(
    private http: HttpClient,
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.loadData(); 
  }
  loadData(){
    this.dataService.getAirplane()
    .subscribe(data => {
      this.airplane=data;
    });
  }

  deleteMe(id){
    this.dataService.deleteAirplane(id)
    .subscribe(data => {
      this.loadData();
    });
  }

  AddMe(name,id){
    this.dataService.addAirplane(id,name)
    .subscribe(data => {
      this.loadData();
    });
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}
