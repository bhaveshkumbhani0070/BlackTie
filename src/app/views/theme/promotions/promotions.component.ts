import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, NgForm } from '@angular/forms';
import { CustomeValidateComponent } from '../show-error/custome-validate.component';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  data:any;
  description:string;
  validity:string;
  public myForm: FormGroup;

  constructor(
    private http: HttpClient,
    private dataService:DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      'description':['',Validators.required],
      'validity':['',Validators.required]
    },
    {
      validator: Validators.compose([])
    });
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
