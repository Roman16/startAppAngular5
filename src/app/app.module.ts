import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { routing } from './app.routing.module';

import {HomePageComponent} from '../pages/home/home';
import {AboutPageComponent} from '../pages/about/about';
import { NavbarComponent } from '../components/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        AboutPageComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
