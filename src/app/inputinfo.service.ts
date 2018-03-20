import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs/Observable';

@Injectable()
export class InputinfoService {
  
  startAge = [62, 63, 64, 65, 66, 67, 68, 69, 70];
  
  url: string = "https://example.com";
    
  user: any = {
    reginfo: {
      
    },
    
  };
  
 
  constructor(private http: HttpClient) { }
  
  retrieveProfile (profile) {
      return this.http.get(this.url + profile)
      
  }
  
  // addProfile (profile: Profile): Observable<Profile>  {
  //   return this.http.post(this.url, profile,)
  // }

}

