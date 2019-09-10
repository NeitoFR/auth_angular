import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  host: {
    'class': "layout layout--center width100"
  }
})
export class LoginPageComponent implements OnInit {

  usernameInput: string;
  passwordInput: string;

  constructor() { }

  ngOnInit() {
  }

  login(creds: any) {
    console.log("Wants to log in with : \n\tUsername : " + creds.usernameInput + "\n\tPassword : " + creds.passwordInput);

  }

}
