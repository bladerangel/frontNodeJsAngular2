import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {FavoriteService} from '../services/favorite.service';
import {Favorite} from '../models/favorite';

@Component({
    selector: 'app-favorite-edit',
    templateUrl: './favorite-edit.component.html',
    styleUrls: ['./favorite-edit.component.css']
})
export class FavoriteEditComponent implements OnInit {

    public titleSection: string;
    public favorite: Favorite;
    public errorMessage;

    constructor(private favoriteService: FavoriteService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
        this.titleSection = 'Edit favorite';
    }

    ngOnInit() {
        this.favorite = new Favorite('', '', '', '');
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

    onSubmit() {
        console.log(this.favorite);
        this.activatedRoute.params.forEach((params: Params) => {
            const id = params['id'];
            this.favoriteService.editFavorite(id, this.favorite)
                .subscribe(
                    (response) => {
                        console.log(response);
                        this.favorite = response.favoriteUpdated;
                        this.router.navigate(['/favorite', this.favorite._id]);
                    },
                    (error) => {
                        this.errorMessage = error;
                        console.log(this.errorMessage);
                        alert('Error edit favorite');
                    }
                );
        });
    }
}
