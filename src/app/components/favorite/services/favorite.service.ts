import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {Favorite} from '../models/favorite';


@Injectable()
export class FavoriteService {
    public url: string;

    constructor(private http: Http) {
        this.url = 'http://localhost:3678/api/';
    }

    getFavorites() {
        return this.http.get(this.url + 'favorites')
            .map((res) => res.json());
    }

    getFavorite(id: string) {
        return this.http.get(this.url + 'favorite/' + id)
            .map((res) => res.json());
    }

    addFavorite(favorite: Favorite) {
        const params = JSON.stringify(favorite);
        const headers = new Headers({'Content-Type': 'application/json'});

        return this.http.post(this.url + 'favorite', params, {headers})
            .map((res) => res.json());
    }
}
