/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit } from "@angular/core";
import { InputinfoService } from '../inputinfo.service'
import { UserService } from '../user.service'
import { CalculateService } from '../calculate.service'
import { Router } from '@angular/router';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    
    profile: any;
    
    constructor(private inputInfo: InputinfoService, private _user: UserService, private calc: CalculateService, private router: Router) { }
    
    ngOnInit() {
        this._user.getProfileCards()
        .subscribe(result => {
            this.profile = result; 
            return console.log(result);
        });
    }
    
    clickCalc(profile) {
        this.inputInfo.user = profile.profile;
        this.calc.calcBenefit(this.inputInfo.user.dob, this.inputInfo.user.ssiAmount, this.inputInfo.user.income, false);
        this.inputInfo.sendChartData();
        this.router.navigate([`/chart`]);
    }
    
    clickDelete(item) {
        this._user.deleteProfileCards(item.id)
        .subscribe()
        this.profile = this.profile.filter(x => x.id !== item.id);
        console.log(this.profile)
        
    }

}
