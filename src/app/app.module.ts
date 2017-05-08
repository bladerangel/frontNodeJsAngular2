import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FavoriteListComponent} from './components/favorite/favorite-list/favorite-list.component';
import {FavoriteService} from './components/favorite/services/favorite.service';

@NgModule({
    declarations: [
        AppComponent,
        FavoriteListComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    providers: [FavoriteService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
