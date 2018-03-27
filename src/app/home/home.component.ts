/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit } from "@angular/core";
import { InputinfoService } from '../inputinfo.service'
import { UserService } from '../user.service'

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    
    profile: any;
    
    constructor(private inputInfo: InputinfoService, private _user: UserService) { }
    
    ngOnInit() {
        this._user.getProfileCards()
        .subscribe(result => {
            this.profile = result; 
            return console.log(this.profile[0].timeStamp.toString());
        });
    }

}
