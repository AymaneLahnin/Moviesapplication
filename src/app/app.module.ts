import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListFilmsComponent } from './components/list-films/list-films.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component';
import { DetailFilmComponent } from './components/detail-film/detail-film.component';
@NgModule({
  declarations: [
    AppComponent,
    ListFilmsComponent,
    FilmItemComponent,
    SignUpComponent,
    NavbarComponent,
    SearchResultsComponent,
    SignInComponent,
    FavoriteMoviesComponent,
    DetailFilmComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
