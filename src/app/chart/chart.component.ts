import { Component, OnInit } from '@angular/core';
import { InputinfoService } from '../inputinfo.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  
  // chart = [];

  constructor(private inputInfo: InputinfoService, private _user: UserService, private router: Router) { }

  ngOnInit() {
    if (this.lineChartData.length === 0){
      this.router.navigate(['']);
    }
   
  }

  public lineChartData:Array<any> = this.inputInfo.chartData;
  
  public lineChartLabels:Array<any> = this.inputInfo.chartXAxis;
  
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
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Retirement Age",
          // type: 'time',
        },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 7
          }
    }]   
  }
  };
  public lineChartColors:Array<any> = [
    { //red
      backgroundColor: 'rgba(167,12,12,0.2)',
      borderColor: 'rgba(167,12,12,1)',
      pointBackgroundColor: 'rgba(167,12,12,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: false,
      lineTension: 0
    },
    { // orange
      backgroundColor: 'rgba(212,135,16,0.2)',
      borderColor: 'rgba(212,135,16,1)',
      pointBackgroundColor: 'rgba(212,135,16,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
      hidden: true,
      fill: false
    },
    { // yellow
      backgroundColor: 'rgba(226,230,43,0.2)',
      borderColor: 'rgba(226,230,43,1)',
      pointBackgroundColor: 'rgba(226,230,43,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      hidden: true,
      fill: false
    },
    { // green
      backgroundColor: 'rgba(33,132,10,0.2)',
      borderColor: 'rgba(33,132,10,1)',
      pointBackgroundColor: 'rgba(33,132,10,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: false,
      lineTension: 0
    },
    { // aquamarine
      backgroundColor: 'rgba(11,191,134,0.2)',
      borderColor: 'rgba(11,191,134,1)',
      pointBackgroundColor: 'rgba(11,191,134,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      hidden: true,
      fill: false
    },
    { // purple
      backgroundColor: 'rgba(115,11,191,0.2)',
      borderColor: 'rgba(115,11,191,1)',
      pointBackgroundColor: 'rgba(115,11,191,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      hidden: true,
      fill: false
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      hidden: true,
      fill: false
    },
    { // grey
      backgroundColor: 'rgba(218,17,80,0.2)',
      borderColor: 'rgba(218,17,80,1)',
      pointBackgroundColor: 'rgba(218,17,80,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      hidden: true,
      fill: false
    },
    { // blue
      backgroundColor: 'rgba(30,65,171,0.2)',
      borderColor: 'rgba(30,65,171,1)',
      pointBackgroundColor: 'rgba(30,65,171,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: false,
      lineTension: 0
    },
    { // blue
      backgroundColor: 'rgba(255,205,86,0.2)',
      borderColor: 'rgba(255,205,86,1)',
      pointBackgroundColor: 'rgba(255,205,86,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: false,
      borderDash: [5, 5],
      radius: 0
    },
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  // events
  public chartClicked(e:any):void {
    console.log();
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
