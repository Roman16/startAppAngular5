import { Component } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home.html'
})
export class HomePageComponent {
    constructor() {
        console.log('run home page');
    }
}