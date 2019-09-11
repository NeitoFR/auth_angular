import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  host: {
    'class': "layout layout--center width100"
  }
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: LoginService, private toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      usernameInput: new FormControl(), 
      passwordInput: new FormControl()
    });
  }

  login() {
    this.toastr.info("Start logging attempt")
    console.log("Start of logging.\nWants to log in with : \n\tUsername : " + this.loginForm.get('usernameInput').value + "\n\tPassword : " + this.loginForm.get('usernameInput').value );
    // console.log(this.loginForm.controls.);
    this.loginService.login({
      username: this.loginForm.get('usernameInput').value,
      password: this.loginForm.get('usernameInput').value
    }).then(() => {
      console.log("End of logging");
      this.toastr.info("End of logging attempt")
      
    })
    this.loginForm.reset();
  }

  fillMock() {
    this.loginForm.patchValue({
      usernameInput: "NeitoFR",
      passwordInput: "tructruc123"
    })
  }

}
