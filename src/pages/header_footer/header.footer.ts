import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header_footer.html',
    styleUrls: ['./app.header.scss']
})
export class HeaderComponent {
    constructor() {
        console.log('run header page');
    }
}