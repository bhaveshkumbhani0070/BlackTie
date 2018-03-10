import { Component } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, NgForm } from '@angular/forms';
import { CustomeValidateComponent } from './show-error/custome-validate.component';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  email: string;
  password:string;
  userForm: any;
  errorEmail:string="";
  errorPassword:string="";
  public myForm: FormGroup;

  // myForm: FormGroup;
  // emailCtrl: FormControl;
  
  constructor(
    private authenticationService:AuthenticationService,
    private router:Router ,
    private fb: FormBuilder
  ) { 
    
  }
  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    this.myForm = this.fb.group({
      'email':['',[Validators.required,CustomeValidateComponent.emailValid]],
      'password':['',Validators.required]
    },
    {
      validator: Validators.compose([])
    });
   
  }
  logMein(){
    console.log('email',this.email,' ',this.password);
    this.authenticationService.login(this.email, this.password)
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

