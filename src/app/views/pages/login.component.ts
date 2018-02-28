import { Component } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  email: string;
  password:string;
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
  logMein(email,password){
    console.log('email',email,' ',password);
    if(!email){
      this.errorEmail="Email field is required";
      return;
    }
    else{
      var EMAIL_REGEXP = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
      var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (regexp.test(email)) {
        this.errorEmail="";
      }
      else{
        this.errorEmail="Please provide a valid email";
        return;
      }

    }
    if(!password){
      this.errorPassword="Password field is required";
    }
    else{
      if(password.length>8){
        this.errorPassword="";
      }
      else{
        this.errorPassword="Password must more than 8 character";
        return;
      }
    }
    this.authenticationService.login(email, password)
    .subscribe(result => {
        if (result === true) {
            // login successful
            this.router.navigate(['/dashboard']);
        } else {
            // login failed
            console.log('Fail to authenticate');
        }
    });
  }
}


