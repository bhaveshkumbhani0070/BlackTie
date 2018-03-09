import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { AuthenticationService } from '../../../authentication.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, NgForm } from '@angular/forms';
import { CustomeValidateComponent } from '../show-error/custome-validate.component';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  
  data:any;
  hours:string;
  rHours:string;
  id:string;
  public myForm: FormGroup;

  constructor(
    private dataService:DataService,
    private authenticationService:AuthenticationService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
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
      // console.log('Manage data',data["data"]["data"]);
      localStorage.setItem('totalManagement', data["data"]["data"]["length"]);
      this.data=data["data"]["data"];
    })
  }

  updateId(d){
    this.id=d.client_id;
    this.hours=d.total_package_hours;
    this.rHours=d.remaining_hours;
  }
  UpdateMe(data){
    this.dataService.updateManage(this.id,this.hours,this.rHours)
    .subscribe(data=>{
      this.hours="";
      this.rHours="";
      this.loadData();
    })
  }
}
