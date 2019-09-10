import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      usernameInput: new FormControl(), 
      passwordInput: new FormControl()
    });
  }

  login() {
    console.log("Wants to log in with : \n\tUsername : " + this.loginForm.get('usernameInput').value + "\n\tPassword : " + this.loginForm.get('passwordInput').value );
    // console.log(this.loginForm.controls.);

    this.loginForm.reset();
  }

  fillMock() {
    this.loginForm.patchValue({
      usernameInput: "NeitoFR",
      passwordInput: "tructruc123"
    })
  }

}
