import { Component, OnInit } from '@angular/core';
import { InputinfoService } from '../inputinfo.service'
import { CalculateService } from '../calculate.service'

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  
  statementQ: boolean = true;
  
  statement: boolean;
  
  constructor(private inputInfo: InputinfoService, private calc: CalculateService) { }
  
  statementYes() {
    this.statement = true;
    this.statementQ = false;
    console.log(this.statement)
  }
  
  statementNo() {
    this.statement = false;
    this.statementQ = false;
    console.log(this.statementQ)
  }
  
  onClick(): void {
    //this.calc.calcBenefit(this.inputInfo.user.dob, this.inputInfo.user.ssiAmount, this.inputInfo.user.gender);
  }

  ngOnInit() {
  }

}
