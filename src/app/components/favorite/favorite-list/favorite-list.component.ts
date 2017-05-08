import {Component, OnInit} from '@angular/core';

import {FavoriteService} from '../services/favorite.service';
import {Favorite} from '../models/favorite';

@Component({
    selector: 'app-favorite-list',
    templateUrl: './favorite-list.component.html',
    styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
    public title: string;
    public errorMessage;

    constructor(private favoriteService: FavoriteService) {
        this.title = 'List Favorites:';
    }

    ngOnInit() {
        this.favoriteService.getFavorites()
            .subscribe(
                (result) => {
                    console.log(result);
                },
                (error) => {
                    this.errorMessage = error;
                    console.log(this.errorMessage);
                    alert('Error get favorites');
                }
            );
        console.log('Favorites loaded');
    }

}
