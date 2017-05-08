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

    constructor(private favoriteService: FavoriteService) {
    }

    ngOnInit() {
    }

}
