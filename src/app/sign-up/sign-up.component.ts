import { Component, OnInit } from '@angular/core';
import { InputinfoService } from '../inputinfo.service'
import { UserService } from '../user.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  failed: boolean;
  
  constructor(private inputInfo: InputinfoService, private _user: UserService, private router: Router) { }
  
  ngOnInit() {
  
  }
  
  signUp() {
    this._user.registerUser(this.inputInfo.user.reginfo)
    .subscribe((result: any) => {
      console.log(result);
      sessionStorage.setItem('token', result.token);
      sessionStorage.setItem('userId', result.userId);
      this.router.navigate(['']);
    },
    error => this.failed=true)
  }
}
