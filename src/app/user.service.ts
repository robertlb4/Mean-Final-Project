import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
    baseUrl: string = "http://robert-spring-2018-phortonssf.c9users.io:8080/api/appUsers"

  constructor(private _http: HttpClient) { }
  
  registerUser(userInfo) {
      console.log(userInfo, 'this is the user')
      return this._http.post(this.baseUrl, userInfo);
  }

}
