import { Component } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  email: string;
  password:string;
  userForm: any;
  errorEmail:string="";
  errorPassword:string="";
  constructor(
    private authenticationService:AuthenticationService,
    private router:Router 
  ) { 
    
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
      this.errorEmail="";

    }
    if(!password){
      this.errorPassword="Password field is required";
    }
    else{
      this.errorPassword="";
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


