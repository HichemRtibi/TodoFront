import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import construct = Reflect.construct;
export class HelloWorldBean {
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) {
  }

   excuteHelloWorldBeanMessage() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-bean');
  }
}

