import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs/Observable';

@Injectable()
export class InputinfoService {
  
  startAge = [62, 63, 64, 65, 66, 67, 68, 69, 70];
  chartXAxis= [60, 65, 70, 75, 80, 85, 90, 95, 100];
  
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
        Math.max(0, e*((this.chartXAxis[0] - this.startAge[i])*12)),
        Math.max(0, e*((this.chartXAxis[1] - this.startAge[i])*12)),
        Math.max(0, e*((this.chartXAxis[2] - this.startAge[i])*12)),
        Math.max(0, e*((this.chartXAxis[3] - this.startAge[i])*12)),
        Math.max(0, e*((this.chartXAxis[4] - this.startAge[i])*12)),
        Math.max(0, e*((this.chartXAxis[5] - this.startAge[i])*12)),
        Math.max(0, e*((this.chartXAxis[6] - this.startAge[i])*12)),
        Math.max(0, e*((this.chartXAxis[7] - this.startAge[i])*12)),
        Math.max(0, e*((this.chartXAxis[8] - this.startAge[i])*12)),
      ],
      label: 'Retire at' + this.startAge[i]  
      };
    })
      console.log(this.chartData);
  }
  
  retrieveProfile (profile) {
      return this.http.get(this.url + profile)
      
  }
  
  // addProfile (profile: Profile): Observable<Profile>  {
  //   return this.http.post(this.url, profile,)
  // }

}

