import { Component, OnInit } from '@angular/core';
import { InputinfoService } from '../inputinfo.service';
import { UserService } from '../user.service'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  
  chart = [];

  constructor(private inputInfo: InputinfoService, private _user: UserService) { }

  ngOnInit() {
    
    // this.chart = new Chart(canvas, {
    //   type: 'line',
    //   labels: 
      
    // })
  }

  public lineChartData:Array<any> = this.inputInfo.chartData;
  
  public lineChartLabels:Array<any> = [60, 65, 70, 75, 80, 85, 90, 95, 100];
    // {data: [
    //   this.inputInfo.user.monthlyBen[0]*12,
    //   this.inputInfo.user.monthlyBen[0]*60,
    //   this.inputInfo.user.monthlyBen[0]*120,
    //   this.inputInfo.user.monthlyBen[0]*180,
    //   this.inputInfo.user.monthlyBen[0]*240,
    //   this.inputInfo.user.monthlyBen[0]*300,
    //   this.inputInfo.user.monthlyBen[0]*360,
    //   this.inputInfo.user.monthlyBen[0]*420,
    //   this.inputInfo.user.monthlyBen[0]*480
    //   ], 
    //   label: 'Retire at 62'
    // },
    // {data: [
    //   this.inputInfo.user.monthlyBen[1]*12,
    //   this.inputInfo.user.monthlyBen[1]*60,
    //   this.inputInfo.user.monthlyBen[1]*120,
    //   this.inputInfo.user.monthlyBen[1]*180,
    //   this.inputInfo.user.monthlyBen[1]*240,
    //   this.inputInfo.user.monthlyBen[1]*300,
    //   this.inputInfo.user.monthlyBen[1]*360,
    //   this.inputInfo.user.monthlyBen[1]*420,
    //   this.inputInfo.user.monthlyBen[1]*480
    //   ],  
    //   label: 'Retire at 63'
    // },
    // {data: [
    //   this.inputInfo.user.monthlyBen[2]*12,
    //   this.inputInfo.user.monthlyBen[2]*60,
    //   this.inputInfo.user.monthlyBen[2]*120,
    //   this.inputInfo.user.monthlyBen[2]*180,
    //   this.inputInfo.user.monthlyBen[2]*240,
    //   this.inputInfo.user.monthlyBen[2]*300,
    //   this.inputInfo.user.monthlyBen[2]*360,
    //   this.inputInfo.user.monthlyBen[2]*420,
    //   this.inputInfo.user.monthlyBen[2]*480
    //   ],  
    //   label: 'Retire at 64'
    // }];
    
  
  
  
  
  public lineChartOptions:any = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Total Amount Earned'
        },
        ticks: {
          min: 100
        }
      }],
      
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Retirement Age"
        }
      }]
    }     
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: false,
      lineTension: 0
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
      hidden: true,
      fill: false
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      hidden: true,
      fill: false
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: false,
      lineTension: 0
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      hidden: true,
      fill: false
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      hidden: true,
      fill: false
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      hidden: true,
      fill: false
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      hidden: true,
      fill: false
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: false,
      lineTension: 0
    },
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  clickSave () {
    this._user.saveResult({fra: 67, monthlybenefit: 2000})
    .subscribe(result => console.log(result + " success!"))
  }
 
  // events
  public chartClicked(e:any):void {
    console.log();
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
