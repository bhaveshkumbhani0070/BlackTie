import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { DataService } from '../../../data.service';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { FileUpload } from '../../../fileupload';

import * as AWS from 'aws-sdk';

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

  myfile:any;
  file:any;
  imagePath:string;

  currentFileUpload: FileUpload
  progress: {percentage: number} = {percentage: 0}

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

  deleteMe(d){
    this.dataService.deleteAirplane(d.id)
    .subscribe(data => {
      this.loadData();
    });
  }

  AddMe(){
    this.dataService.addAirplane(this.id,this.name)
    .subscribe(data => {
      this.id="";
      this.name="";
      this.loadData();
    });
  }

  handleFileInput(files: FileList) {
    console.log('file to upload',files.item(0));
    this.fileToUpload = files.item(0);

    const file = files.item(0);
    
     this.currentFileUpload = new FileUpload(file);
    this.dataService.pushFileToStorage(this.currentFileUpload, this.progress)
    
    // AWS.config.update({
    //   accessKeyId: this.dataService.accessKeyId,
    //   secretAccessKey: this.dataService.secretAccessKey,
    //   region: "ap.south-1"
    //   });
      
    //   var s3 = new AWS.S3();
    //   var params = {
    //       Bucket: this.dataService.Bucket,
    //       Key: this.fileToUpload.name,
    //       Body: this.fileToUpload,
    //       ContentType:'image/jpeg',
    //       ACL: "public-read",
    //       AccessControlPolicy: {
    //         Grants: [
    //         {
    //             Grantee: {
    //             Type: 'AllUsers', 
    //             },
    //             Permission: 'READ'
    //         },
    //         ],
    //     },
    //   };
    //   s3.upload(params, function (err, res) {
    //       if (err) {
    //           console.log("Error uploading data: ", err);
    //       } else {
    //           console.log("Successfully uploaded data to myBucket/myKey",res.Location);
    //           this.imagePath=res.Location;
    //           localStorage.setItem("imagePath",res.Location);
    //       }
    //   });
  }

    fileEvent(files: FileList){
        this.file = files.item(0);
    }
}
