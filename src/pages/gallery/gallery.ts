import { Component } from '@angular/core';

@Component({
    selector: 'app-gallery-page',
    templateUrl: './gallery.html'
})
export class GalleryPageComponent {
    constructor() {
        console.log('run gallery page');
    }
}