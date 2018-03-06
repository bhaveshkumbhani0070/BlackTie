import { Component } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: 'forgot.component.html'
})
export class ForgotComponent {

  email: string;
  userForm: any;
  errorEmail:string="";
  errorPassword:string="";
  
  // myForm: FormGroup;
  // emailCtrl: FormControl;
  
  constructor(
    private authenticationService:AuthenticationService,
    private router:Router ,
    // private fb: FormBuilder
  ) { 
    // this.myForm = fb.group({
    //   username:  ['', Validators.required],
    //   surname: ['', Validators.required],
    //   message: ['', Validators.required],
    //   email: ['', Validators.email]
    // });
  }
  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    this.userForm = new FormGroup({
      'email': new FormControl(this.email, [
        Validators.required
      ]),
    });
   
  }
  forgot(){
    console.log('email',this.email);
    if(!this.email){
      this.errorEmail="Email field is required";
      return;
    }
    else{
      var EMAIL_REGEXP = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
      var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (regexp.test(this.email)) {
        this.errorEmail="";
      }
      else{
        this.errorEmail="Please provide a valid email";
        return;
      }

    }
   
  }
}

