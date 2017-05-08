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

    constructor(private favoriteService: FavoriteService) {
        this.titleSection = 'Create new favorite';
    }

    ngOnInit() {
        this.favorite = new Favorite('', '', '');
    }

    onSubmit() {
        console.log(this.favorite);
    }
}
