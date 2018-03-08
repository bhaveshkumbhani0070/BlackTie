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
  private myForm: FormGroup;

  constructor(
    private dataService:DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      'name': ['', Validators.required],
      'birthYear': ['', [Validators.required,CustomeValidateComponent.birthYear]],
      'location': this.fb.group({
        'country': ['', Validators.required],
        'city': ''
      }),
      'phoneNumbers': this.fb.array([this.buildPhoneNumberComponent()])
    },
    {
      validator: Validators.compose([CustomeValidateComponent.countryCity, CustomeValidateComponent.telephoneNumbers])
    }
  );

    this.loadData();
  }
  
  buildPhoneNumberComponent() {
    return new FormControl('', [Validators.required]);
  }
  

  loadData(){
    this.dataService.getManage()
    .subscribe( data => {
      console.log('account data',data["data"]["data"]);
      this.data=data["data"]["data"];
    })
  }

  addAccount(){
    console.log('Test validation');

    // this.dataService.addAccount(this.email,this.phone,this.hours,this.rHours,"password",this.fname,this.lname)
    // .subscribe(data=>{
    //   console.log('data',data);
    //   this.loadData();
    // })
  }
}


