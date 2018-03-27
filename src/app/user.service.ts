import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
    private email: string = "";
    private password: string = "";
    
    baseUrl: string = "http://robert-spring-2018-phortonssf.c9users.io:8080/api/appUsers/"

  constructor(private _http: HttpClient) { }
  
  registerUser(userInfo) {
      console.log(userInfo, 'this is the user')
      return this._http.post(this.baseUrl, userInfo);
  }
  
  logIn() {
      return this._http.post(this.baseUrl + 'login', {email: this.email, password: this.password})
  }
  
  saveResult (userInfo) {
      let time = new Date();
      let userId = sessionStorage.getItem('userId');
      let token = sessionStorage.getItem('token');
      console.log(time);
      return this._http.post(this.baseUrl + userId + '/ssireturns?access_token=' + token, {profile: userInfo, timeStamp: time})
  }
  
  getProfileCards() {
    let userId = sessionStorage.getItem('userId');
    let token = sessionStorage.getItem('token');
    return this._http.get(this.baseUrl + userId + '/ssireturns?access_token=' + token)
  }

}
