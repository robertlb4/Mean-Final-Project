import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { InputFormComponent } from './input-form/input-form.component';
import { InputinfoService } from './inputinfo.service'

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        InputFormComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [InputinfoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
