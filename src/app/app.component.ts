import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    
    constructor(private router: Router, private _user: UserService) {
    }
    
    logOut() {
        sessionStorage.clear();
        this._user.token = null
        this.router.navigate(['']);
    }
}
