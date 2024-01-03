import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFilmsComponent } from './components/list-films/list-films.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { DetailFilmComponent } from './components/detail-film/detail-film.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component';

const routes: Routes = [{
  path:'',component:SignInComponent
},{path:'HomePage',component:ListFilmsComponent},{
  path:'SignUp',component:SignUpComponent
},{path:"Favoris",component:FavoriteMoviesComponent},{
  path:'searchResults',component:SearchResultsComponent
},
{
  path:'film/:id',component:DetailFilmComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
