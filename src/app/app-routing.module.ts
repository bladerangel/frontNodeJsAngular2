import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FavoriteListComponent} from './components/favorite/favorite-list/favorite-list.component';

const routes: Routes = [
    {path: '', component: FavoriteListComponent},
    {path: '**', component: FavoriteListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
