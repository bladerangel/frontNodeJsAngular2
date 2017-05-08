import {Component} from '@angular/core';

@Component({
    selector: 'app-favorite-list',
    templateUrl: './favorite-list.component.html',
    styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent {
    title: string;

    constructor() {
        this.title = 'List Favorites:';
    }
}
