import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WelcomeDataService} from "../services/data/welcome-data.service";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';
  welcomeMessageFromServices:string;

  constructor(private router: ActivatedRoute,private welcomedataservice:WelcomeDataService) {
  }

  ngOnInit() {
    this.name = this.router.snapshot.params['name']
  }

  getWelcomeMessage() {
   this.welcomedataservice.excuteHelloWorldBeanMessage().subscribe(
     response=>this.handleSuccesfulResponse(response)
   //  response=>console.log(response.message)
   ) ;


  }
  handleSuccesfulResponse(response) {
  // console.log(response);
    //console.log(response.message);
    this.welcomeMessageFromServices=response.message;
  }

}
