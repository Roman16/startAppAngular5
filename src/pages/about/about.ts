import { Component } from '@angular/core';

@Component({
    selector: 'app-about-page',
    templateUrl: './about.html'
})
export class AboutPageComponent {
    constructor() {
        console.log('run about page');
    }
}