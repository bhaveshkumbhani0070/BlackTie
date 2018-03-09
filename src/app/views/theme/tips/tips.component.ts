import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, NgForm } from '@angular/forms';
import { CustomeValidateComponent } from '../show-error/custome-validate.component';


@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  data:any;
  title:string;
  description:string;
  public myForm: FormGroup;

  constructor(
    private http: HttpClient,
    private dataService:DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      'title':['',Validators.required],
      'description':['',Validators.required]
    },
    {
      validator: Validators.compose([])
    });
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
