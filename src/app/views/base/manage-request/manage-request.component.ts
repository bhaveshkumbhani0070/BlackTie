import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { OrderModule } from 'ngx-order-pipe';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, NgForm } from '@angular/forms';
import { CustomeValidateComponent } from '../show-error/custome-validate.component';


@Component({
  selector: 'app-manage-request',
  templateUrl: './manage-request.component.html',
  styleUrls: ['./manage-request.component.scss']
})

export class ManageRequestComponent implements OnInit {

  data:any;
  client_id:string="";
  flight_from:string;
  flight_to:string;
  flight_type:string="";
  number_of_passengers:string;
  date_time:string;
  return_date_time:string;
  client_ids=[];
  status="";
  plane_type="";
  statuss=["requested","upcoming","completed"];
  plane_types=["Turboprop","Light Jet","Very Light Jet"];
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  mytime: Date = new Date();
  myRtime:Date=new Date();
  aleData: any[] = [];
  public myForm: FormGroup;

  constructor(
    private http: HttpClient,
    private dataService:DataService,
    private fb: FormBuilder
  ) {  
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      'client_id':['',Validators.required],
      'flight_from':['',Validators.required],
      'flight_to':['',Validators.required],
      'flight_type':['',Validators.required],
      'number_of_passengers':['',Validators.required],
      'date_time':[''],
      'return_date_time':[''],
      'plane_type':['',Validators.required],
      'status':['',Validators.required],
      'myRtime':[''],
      'mytime':['']
    },
    {
      validator: Validators.compose([])
    });
    this.loadData();
    this.loadManage();
  }

  loadManage(){
    this.dataService.getManage()
    .subscribe( data => {
      console.log('New Account request',data);
      this.client_ids=data["data"]["data"];
    })
  }    
  loadData(){
    this.dataService.getFlight()
    .subscribe(data=>{
      this.data=data["data"]["data"];
      localStorage.setItem('totalManage', data["data"]["data"]["length"]);
    })
  }

  onChange(d,selected){
    console.log('data',d.id,selected);
    this.dataService.updateFlight(d.id,selected)
    .subscribe( data => {
        console.log('updated flight',data);
        this.aleData.push({
          type: 'info',
          msg: 'The status of your flight enquiry has been updated. Please check My Bookings section in Blacktie App',
          timeout: 5000
        });
    })
    this.dataService.addNotification([d.client_id],"Status update by admin") 
      .subscribe(data => {
        console.log('Notification send to client');
        this.loadData();
      });
  }

  addRequest(){

    this.dataService.addFlightReq(
      this.client_id,
      this.flight_from,
      this.flight_to,
      this.flight_type,
      this.plane_type,
      this.number_of_passengers,
      this.departDate(this.date_time,this.mytime),
      this.departDate(this.return_date_time,this.myRtime),
      this.status)
    .subscribe( data => {
      this.client_id="";
      this.flight_from="";
      this.flight_to="";
      this.flight_type="";
      this.plane_type="";
      this.number_of_passengers="";
      this.date_time="";
      this.return_date_time="";
      this.loadData();
      console.log('Manage request is created',status, data);
    })
  }
  departDate(date_time,mytime){
    var date=new Date(date_time);
    var time=new Date(mytime);
    return date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+" "+time.getHours()+":"+time.getMinutes()+":00";
  }
}

