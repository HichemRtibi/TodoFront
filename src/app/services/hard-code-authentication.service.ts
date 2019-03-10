import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodeAuthenticationService {


  constructor() { }

  authenticate(username, password) {
    console.log('before ' + this.isUserLoggedIn());
    if(username==="hichem" && password === 'rtibi') {
      sessionStorage.setItem('authenticaterUser', username);
      console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

logout(){
    sessionStorage.removeItem('authenticaterUser');
}

}
