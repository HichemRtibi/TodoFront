import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodeAuthenticationService {

  constructor() { }

  Authenticate(username,password){
    if(username==='hichem'&& password==='rtibi'){
      sessionStorage.setItem('authenticated User',username);
      return true;
    }else return false;
  }
}
