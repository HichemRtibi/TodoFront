import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HardCodeAuthenticationService} from "../services/hard-code-authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='hichem';
  password:string='rtibi'
  IvalidLogin=false;

  ErrorMessage='Invalid Username and Password';

  constructor(private router:Router,private hardcodeauthentication:HardCodeAuthenticationService) { }

  ngOnInit() {
  }
  HandleLogin() {
    if(this.hardcodeauthentication.Authenticate(this.username ,this.password)){
      this.router.navigate(['welcome',this.username])
      this.IvalidLogin=false;
    }else {
      this.IvalidLogin=true;
    }

  }
}
