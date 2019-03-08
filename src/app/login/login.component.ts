import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='in28minutes';
  password:string='in28minutes'

  constructor() { }

  ngOnInit() {
  }
  HandleLogin(){
    console.log(this.username);

  }
}
