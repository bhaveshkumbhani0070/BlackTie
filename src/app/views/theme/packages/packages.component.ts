import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, NgForm } from '@angular/forms';
import { CustomeValidateComponent } from '../show-error/custome-validate.component';

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
  public myForm: FormGroup;

  constructor(
    private http: HttpClient,
    private dataService:DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      'id':['',Validators.required],
      'hours':['',Validators.required],
      'duration':['',Validators.required],
      'cost':['',Validators.required]
    },
    {
      validator: Validators.compose([])
    });
    this.loadData();
  }
  
  loadData(){
    this.dataService.getAppPackage()
    .subscribe(data => {
      // console.log('data',data);
      this.data=data;
    });
  }

  deleteMe(id){
    this.dataService.deleteAppPackage(id)
    .subscribe(data => {
      this.loadData();
    });
  }

  AddMe(){
    this.dataService.addAppPackage(this.id,this.hours,this.cost,this.duration)
    .subscribe(data => {
      // console.log('data',data);
      this.id="";
      this.hours="";
      this.cost="";
      this.duration="";
      this.loadData();
    });
  }
}
