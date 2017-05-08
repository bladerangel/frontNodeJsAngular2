import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FavoriteListComponent} from './components/favorite/favorite-list/favorite-list.component';
import {FavoriteDetailComponent} from './components/favorite/favorite-detail/favorite-detail.component';
import {FavoriteAddComponent} from './components/favorite/favorite-add/favorite-add.component';

const routes: Routes = [
    {path: '', component: FavoriteListComponent},
    {path: 'favorite/:id', component: FavoriteDetailComponent},
    {path: 'new-favorite', component: FavoriteAddComponent},
    {path: '**', component: FavoriteListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
