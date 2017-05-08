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
}
