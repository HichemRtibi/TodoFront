import { Component, OnInit } from '@angular/core';
import {HardCodeAuthenticationService} from "../services/hard-code-authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedI:boolean=false;

  constructor(private hardCodeAuthenticationService :HardCodeAuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedI=this.hardCodeAuthenticationService.isUserLoggedIn();
  }

}
