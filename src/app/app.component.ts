import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title: string;
    public description: string;

    constructor() {
        this.title = 'App favorite!';
        this.description = 'Application web SPA with Angular 2';
    }
}
