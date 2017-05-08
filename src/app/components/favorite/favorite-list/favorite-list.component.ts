import {Component} from '@angular/core';

@Component({
    selector: 'app-favorite-list',
    templateUrl: './favorite-list.component.html',
    styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent {
    title: string;
    favorites: Array<string>;
    favoritesVisible: boolean;
    color: string;

    constructor() {
        this.title = 'List Favorites:';
        this.favorites = ['youtube.com', 'google.com', 'twitter.com'];
        this.favoritesVisible = false;
    }

    showFavorites() {
        this.favoritesVisible = true;
    }

    hideFavorites() {
        this.favoritesVisible = false;
    }

    changeColor() {
        console.log(this.color);
    }
}
