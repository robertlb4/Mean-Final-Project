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
  
  constructor(private inputInfo: InputinfoService, private _user: UserService, private router: Router) { }
  
  // reginfo: any = {
  //   firstName: this.inputInfo.user.firstName,
  //   lastName: this.inputInfo.user.lastName,
  //   email: this.inputInfo.user.email,
  //   password: this.inputInfo.user.password
  // };
  
  ngOnInit() {
  
  }
  
  signUp() {
    this._user.registerUser(this.inputInfo.user.reginfo)
    .subscribe((result: any) => {
      console.log(result);
      sessionStorage.setItem('token', result.token);
      sessionStorage.setItem('userId', result.userId);
      this.router.navigate(['']);
    })
  }
}
