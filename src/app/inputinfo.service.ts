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
  chartData: any[] = [];
 
  constructor(private http: HttpClient) { }
  
  sendChartData(){
    this.chartData=this.user.monthlyBen
    .map((e, i) => {
      return {data: [
        e*12,
        e*60,
        e*120,
        e*180,
        e*240,
        e*300,
        e*360,
        e*420,
        e*480
      ],
      label: 'Retire at' + this.startAge[i]  
      };})
      console.log(this.chartData);
  }
  
  retrieveProfile (profile) {
      return this.http.get(this.url + profile)
      
  }
  
  // addProfile (profile: Profile): Observable<Profile>  {
  //   return this.http.post(this.url, profile,)
  // }

}

