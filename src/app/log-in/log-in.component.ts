import { Component, OnInit } from '@angular/core';
import { InputinfoService } from '../inputinfo.service'
import { UserService } from '../user.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private inputInfo: InputinfoService, private _user: UserService) { }

  ngOnInit() {
  }
  
  onLogIn() {
    this._user.logIn()
    .subscribe(result => console.log(result));
  } 

}
