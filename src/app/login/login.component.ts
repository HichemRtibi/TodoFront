import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='in28minutes';
  password:string='in28minutes'
  IvalidLogin=false;

  ErrorMessage='Invalid Username and Password';

  constructor() { }

  ngOnInit() {
  }
  HandleLogin() {
    if(this.username==='hichem'&& this.password==='rtibi'){
      this.IvalidLogin=false;
    }else {
      this.IvalidLogin=true;
    }

  }
}
