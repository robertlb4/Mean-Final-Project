import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs/Observable';

@Injectable()
export class InputinfoService {
    
  url: string = "https://example.com";
    
  user: any = {
    
    
  };
  
 
  constructor(private http: HttpClient) { }
  
  retrieveProfile (profile) {
      return this.http.get(this.url + profile)
      
  }
  
  // addProfile (profile: Profile): Observable<Profile>  {
  //   return this.http.post(this.url, profile,)
  // }

}

