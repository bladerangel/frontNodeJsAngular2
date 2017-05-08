import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {FavoriteService} from '../services/favorite.service';
import {Favorite} from '../models/favorite';

@Component({
    selector: 'app-favorite-detail',
    templateUrl: './favorite-detail.component.html',
    styleUrls: ['./favorite-detail.component.css']
})
export class FavoriteDetailComponent implements OnInit {

    public favorite: Favorite;
    public errorMessage;

    constructor(private favoriteService: FavoriteService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.getFavorite();
    }

    getFavorite() {
        this.activatedRoute.params.forEach((params: Params) => {
            const id = params['id'];
            this.favoriteService.getFavorite(id).subscribe(
                (response) => {
                    console.log(response);
                    this.favorite = response.favorite;
                },
                (error) => {
                    this.errorMessage = error;
                    console.log(this.errorMessage);
                    alert('Error get favorite');
                }
            );
        });

    }

}
