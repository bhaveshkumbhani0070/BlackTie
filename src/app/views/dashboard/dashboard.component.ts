import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { DataService } from '../../data.service';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, NgForm } from '@angular/forms';
import { CustomeValidateComponent } from './show-error/custome-validate.component';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit{


  data :any;
  id:string;
  postCode:string;
  email:string;
  phone:string;
  hours:string;
  rHours:string;
  password:string;

  type:string;
  client="all";
  allClient=[];
  fname:string;
  lname:string;
  idd:string;
  typee:string;
  public myForm: FormGroup;

  constructor(
    private dataService:DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      'email':['',[Validators.required,CustomeValidateComponent.emailValid]],
      'phone':['',Validators.required],
      'fname':['',Validators.required],
      'lname':['',Validators.required],
      'hours':['',Validators.required],
      'rHours':['',Validators.required]
    },
    {
      validator: Validators.compose([])
    });
  }

  addAccount(){
    this.dataService.addAccount(this.email,this.phone,this.hours,this.rHours,"password",this.fname,this.lname)
    .subscribe(data=>{
      console.log('data',data);
    })
  }
  addMe(){
    // this.dataService.addNotification(idd,typee) 
    //  .subscribe(data => {
    //    // console.log('addNotification',data);
    //  });
    if(this.client=="all"){
      this.dataService.addNotification(this.allClient,this.type) 
      .subscribe(data => {
        console.log('All data',data);
        this.type="";
      });
    }
    else{
      this.dataService.addNotification([this.id],this.type) 
      .subscribe(data => {
        console.log('single ',data);
        this.type="";
      });
    }
   }
}
