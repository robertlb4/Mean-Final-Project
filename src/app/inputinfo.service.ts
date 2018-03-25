import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs/Observable';

@Injectable()
export class InputinfoService {
  
  startAge = [62, 63, 64, 65, 66, 67, 68, 69, 70];
  
  chartXAxis: any[] = []
    
  user: any = {
    reginfo: {},
    
    
  };
  chartData: any[] = [];
 
  breakEven: any[] = [];
 
  constructor(private http: HttpClient) { }
  
  sendChartData(){
    for (let i=60; i<=100; i++) {
      this.chartXAxis.push(i);
    };
    
    this.chartData=this.user.monthlyBen
    .map((e, i) => {
      return {data: this.chartXAxis.map( age => {
        if (e * ((age-this.startAge[i]) * 12) >= this.user.ssiAmount
            && !this.breakEven.some( (p) => p.startAge===this.startAge[i])) {
          this.breakEven.push({startAge: this.startAge[i], evenAge: age});
        }
       	return e*((age-this.startAge[i])*12)
       }).map(x => {
        if (x < 0) {
          return null;
        } else {
          return x;
        }
      }),
      label: 'Retire at ' + this.startAge[i]  
      };
    })
    console.log(this.breakEven)  ;
  }
}

