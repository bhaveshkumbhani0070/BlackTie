import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, NgForm } from '@angular/forms';
import { CustomeValidateComponent } from '../show-error/custome-validate.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  data :any;
  postCode:string;
  email:string;
  phone:string;
  hours:string;
  rHours:string;
  password:string;
  fname:string;
  lname:string;
  public myForm: FormGroup;

  constructor(
    private dataService:DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
     
      'email':['',Validators.required],
      'phone':['',Validators.required],
      'fname':['',Validators.required],
      'lname':['',Validators.required],
      'hours':['',Validators.required],
      'rHours':['',Validators.required]
    },
    {
      validator: Validators.compose([])
    });
    this.loadData();
  }
  
  loadData(){
    this.dataService.getManage()
    .subscribe( data => {
      console.log('account data',data["data"]["data"]);
      this.data=data["data"]["data"];
    })
  }

  addAccount(alldata){
    // console.log('Test validation',alldata);
    this.dataService.addAccount(this.email,this.phone,this.hours,this.rHours,"password",this.fname,this.lname)
    .subscribe(data=>{
      console.log('data',data);
      this.loadData();
    })
  }
}


