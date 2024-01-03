

import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';

import { FBLinkService } from 'src/app/services/fblink.service';
import { TmdbServiceService } from 'src/app/services/tmdb-service.service';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css'],
})
export class FavoriteMoviesComponent implements OnInit {
  favoriteMovies: any[]=[];

  constructor(public tmdbservice:TmdbServiceService, private movieService: FBLinkService) {}

  ngOnInit() {
    this.loadFavoriteMovies();
  }

  loadFavoriteMovies() {
    const userId = this.movieService.getUserId(); 
    if (userId) {
      this.movieService.getFavoriteMovies(userId).subscribe((movies: Movie[]) => {
        console.log(movies);
        this.favoriteMovies = movies;
      });
    }
  }
}
