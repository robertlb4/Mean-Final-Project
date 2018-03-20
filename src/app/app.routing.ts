/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { InputFormComponent } from './input-form/input-form.component';
import { TableComponent } from './table/table.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChartComponent } from './chart/chart.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'log-in', pathMatch: 'full'},
    {path: 'log-in', component: LogInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'home', component: InputFormComponent},
    {path: 'about', component: AboutComponent},
    {path: 'table', component: TableComponent},
    {path: 'chart', component: ChartComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
