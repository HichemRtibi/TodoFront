import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor() {
  }

   excuteHelloWorldBeanMessage() {
    console.log('hello world Beanmessage');
  }
}
