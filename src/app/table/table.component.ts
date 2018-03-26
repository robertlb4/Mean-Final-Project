import { Component, OnInit } from '@angular/core';
import { InputinfoService } from '../inputinfo.service'
import { UserService } from '../user.service'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  

  constructor(private inputInfo: InputinfoService, private _user: UserService) { }

  ngOnInit() {
  }

  clickSave () {
    this._user.saveResult({dob: this.inputInfo.user.dob, income: this.inputInfo.user.income, ssiAmount: this.inputInfo.user.ssiAmount, monthlybenefit: this.inputInfo.user.monthlyBen})
    .subscribe(result => console.log(result + " success!"))
  }

}
