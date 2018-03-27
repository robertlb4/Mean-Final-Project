import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    token: any = sessionStorage.getItem('token')
    
    constructor(private router: Router) {
    }
}
