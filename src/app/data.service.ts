import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class DataService {

  constructor(
    private http:HttpClient,
    private authenticationService:AuthenticationService
  ) {}
  mainUrl="http://13.127.126.229";
  // Client management
  getFlight() {
      return this.http.get(this.mainUrl + '/api/request/flights/', {
        headers: {
          "content-type": "application/json",
          "Authorization":"Bearer "+this.authenticationService.token
        }
      })
  }

  getPackage(){
    return this.http.get(this.mainUrl + '/api/bookings/', {
      headers: {
        "content-type": "application/json",
        "Authorization":"Bearer "+this.authenticationService.token
      }
    })
  }

  getNotification(){
    return this.http.get(this.mainUrl + '/api/notification', {
      headers: {
        "content-type": "application/json",
        "Authorization":"Bearer "+this.authenticationService.token
      }
    })
  }

  addNotification(id,type){
    return this.http.post(this.mainUrl + '/api/notification/',
    {
      "client_ids":[id],
      "txt":type,
      "heading":"Notification6"
    },
    {
      headers: {
        "content-type": "application/json",
        "Authorization":"Bearer "+this.authenticationService.token
      }
    });
  }

  getAccount(){
    return this.http.get(this.mainUrl + '/api/client', {
      headers: {
        "content-type": "application/json",
        "Authorization":"Bearer "+this.authenticationService.token
      }
    })
  }

  addAccount(id,postCode,email,phone,hours,rHours,password,fname,lname){
    return this.http.post(this.mainUrl + '/api/client',
    {
      "email": email,
      "password":password,
      "mobile":phone,
      "total_package_hours":hours,
      "remaining_hours":rHours,
      "first_name":fname,
      "last_name":lname
    },
    {
      headers: {
        "content-type": "application/json",
        "Authorization":"Bearer "+this.authenticationService.token
      }
    });
  }

  getManage(){
    return this.http.get(this.mainUrl + '/api/userprofile/', {
      headers: {
        "content-type": "application/json",
        "Authorization":"Bearer "+this.authenticationService.token
      }
    })
  }

  // App management

  addAirplane(id,name){
    return this.http.post(this.mainUrl + '/api/airplanemenu/',
    {
      "airplane_name": name,
      "number_of_seat": id
    })
  }
  getAirplane(){
    return this.http.get(this.mainUrl + '/api/airplanemenu/');
  }
  deleteAirplane(id){
    return this.http.delete(this.mainUrl + '/api/airplanemenu/'+id);
  }
  
  addAppPackage(id,hours,cost,duration){
    return this.http.post(this.mainUrl + '/api/package/',
    {
        "package_id": id,
        "package_hour": hours,
        "package_cost": cost,
        "package_duration": duration
    })
  }
  getAppPackage(){
    return this.http.get(this.mainUrl + '/api/package/');
  }
  deleteAppPackage(id){
    return this.http.delete(this.mainUrl + '/api/package/'+id)
  }
  
  addAppPromotions(description,validity){
    return this.http.post(this.mainUrl + '/api/promotiondetails/',
    {
      "title": description,
        "validity": validity
    })
  }
  getAppPromotions(){
    return this.http.get(this.mainUrl + '/api/promotiondetails/');
  }
  deleteAppPromotions(id){
    return this.http.delete(this.mainUrl + '/api/promotiondetails/'+id)
  }

  addAppSlider(file){
    // return this.http.post(this.mainUrl + '/api/sliderbanner/',
    // {
    //   "file": file
    // })
  }
  getAppSlider(){
    return this.http.get(this.mainUrl + '/api/sliderbanner/');
  }
  deleteAppSlider(id){
    return this.http.delete(this.mainUrl + '/api/sliderbanner/'+id)
  }

  addAppTips(title,description){
    return this.http.post(this.mainUrl + '/api/flyingtips/',
    {
      "title": title,
         "description": description
    })
  }
  getAppTips(){
    return this.http.get(this.mainUrl + '/api/flyingtips/');
  }
  deleteAppTips(id){
    return this.http.delete(this.mainUrl + '/api/flyingtips/'+id)
  }

  addAppWorks(title,description){
    return this.http.post(this.mainUrl + '/api/howitworks/',
    {
      "title": title,
         "description": description
    })
  }
  getAppWorks(){
    return this.http.get(this.mainUrl + '/api/howitworks/');
  }
  deleteAppWorks(id){
    return this.http.delete(this.mainUrl + '/api/howitworks/'+id)
  }
}


 
