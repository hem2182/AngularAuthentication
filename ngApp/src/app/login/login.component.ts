import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginUserData = {};
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.loginUserData);
    this.auth.loginUser(this.loginUserData).subscribe(
      res => console.log(res),
      error => console.log(error)
    );
  }

}
