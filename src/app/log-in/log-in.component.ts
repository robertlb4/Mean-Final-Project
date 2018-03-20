import { Component, OnInit } from '@angular/core';
import { InputinfoService } from '../inputinfo.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private inputInfo: InputinfoService) { }

  ngOnInit() {
  }
  
  log() {
    console.log(this.inputInfo.user.email + this.inputInfo.user.password)
  }

}
