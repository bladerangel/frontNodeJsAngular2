import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {FavoriteService} from '../services/favorite.service';
import {Favorite} from '../models/favorite';

@Component({
    selector: 'app-favorite-add',
    templateUrl: './favorite-add.component.html',
    styleUrls: ['./favorite-add.component.css']
})
export class FavoriteAddComponent implements OnInit {

    public titleSection: string;
    public favorite: Favorite;
    public errorMessage;

    constructor(private favoriteService: FavoriteService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
        this.titleSection = 'Create new favorite';
    }

    ngOnInit() {
        this.favorite = new Favorite('', '', '', '');
    }

    onSubmit() {
        console.log(this.favorite);
        this.favoriteService.addFavorite(this.favorite)
            .subscribe(
                (response) => {
                    console.log(response);
                    this.favorite = response.favoriteStored;
                    this.router.navigate(['/favorite', this.favorite._id]);
                },
                (error) => {
                    this.errorMessage = error;
                    console.log(this.errorMessage);
                    alert('Error new favorite');
                }
            );
    }
}
