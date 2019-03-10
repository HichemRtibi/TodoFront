import { Component, OnInit } from '@angular/core';
import {HardCodeAuthenticationService} from "../services/hard-code-authentication.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardCodeAuthenticationService:HardCodeAuthenticationService) { }

  ngOnInit() {
    this.hardCodeAuthenticationService.logout();

  }

}
