import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

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

  constructor(private router:Router) { }

  ngOnInit() {
  }
  HandleLogin() {
    if(this.username==='hichem'&& this.password==='rtibi'){
      this.router.navigate(['welcome',this.username])
      this.IvalidLogin=false;
    }else {
      this.IvalidLogin=true;
    }

  }
}
