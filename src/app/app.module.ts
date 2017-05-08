import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FavoriteListComponent} from './components/favorite/favorite-list/favorite-list.component';
import {FavoriteService} from './components/favorite/services/favorite.service';
import {AppRoutingModule} from './app-routing.module';
import { FavoriteDetailComponent } from './components/favorite/favorite-detail/favorite-detail.component';
import { FavoriteAddComponent } from './components/favorite/favorite-add/favorite-add.component';
import { FavoriteEditComponent } from './components/favorite/favorite-edit/favorite-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        FavoriteListComponent,
        FavoriteDetailComponent,
        FavoriteAddComponent,
        FavoriteEditComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [FavoriteService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
