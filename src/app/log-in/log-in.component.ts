import { Component, OnInit } from '@angular/core';
import { InputinfoService } from '../inputinfo.service'
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  
  failed: boolean;

  constructor(private inputInfo: InputinfoService, private _user: UserService, private router: Router) { }

  ngOnInit() {
     if (sessionStorage.getItem('token')) {
      this.router.navigate(['']);
    }
  }
  
  onLogIn() {
    this._user.logIn()
    .subscribe((result: any) => {
      sessionStorage.setItem('userId', result.userId);
      sessionStorage.setItem('token', result.token);
      this.router.navigate(['']);
    },
    error => this.failed = true)
  }
}
