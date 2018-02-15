import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routing } from './app.routing.module';

import {HeaderComponent} from '../pages/header_footer/header.footer';
import {HomePageComponent} from '../pages/home/home';
import {GalleryPageComponent} from '../pages/gallery/gallery';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomePageComponent,
        GalleryPageComponent
    ],
    imports: [
        BrowserModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
