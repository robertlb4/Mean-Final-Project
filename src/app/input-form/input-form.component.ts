import { Component, OnInit } from '@angular/core';
import { InputinfoService } from '../inputinfo.service'
import { CalculateService } from '../calculate.service'
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  
  basic: boolean = this._user.token ? false : true
  
  statementQ: boolean = true;
  
  statement: boolean;
  
  public openState: boolean = false;
  
  constructor(private inputInfo: InputinfoService, private calc: CalculateService, private router: Router, private _user: UserService) { }
  
  statementYes() {
    this.statement = true;
    this.statementQ = false;
  }
  
  statementNo() {
    this.statement = false;
    this.statementQ = false;
  }
  
  onClickCalc(): void {
    this.calc.calcBenefit(this.inputInfo.user.dob, this.inputInfo.user.ssiAmount, this.inputInfo.user.income, this.statement);
    this.inputInfo.sendChartData();
    this.router.navigate([`/chart`]);
  }
  
  

  ngOnInit() {
  }

}
