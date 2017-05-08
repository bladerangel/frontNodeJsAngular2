import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FavoriteListComponent} from './components/favorite/favorite-list/favorite-list.component';
import {FavoriteService} from './components/favorite/services/favorite.service';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        FavoriteListComponent
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
