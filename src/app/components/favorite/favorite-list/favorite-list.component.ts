import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {FavoriteService} from '../services/favorite.service';
import {Favorite} from '../models/favorite';

@Component({
    selector: 'app-favorite-list',
    templateUrl: './favorite-list.component.html',
    styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
    public title: string;
    public loading: boolean;
    public favorites: Favorite[];
    public errorMessage;

    constructor(private favoriteService: FavoriteService) {
        this.title = 'List Favorites:';
        this.loading = true;
    }

    ngOnInit() {
        this.favoriteService.getFavorites()
            .subscribe(
                (result) => {
                    console.log(result);
                    this.favorites = result.favorites;
                    this.loading = false;
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
