import { HttpClient } from '@angular/common/http';
import { Component,Input } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { FBLinkService } from 'src/app/services/fblink.service';
import { TmdbServiceService } from 'src/app/services/tmdb-service.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent {
  isFavorite = false;  
  @Input() movie!:Movie;
  constructor(public tmdbservice:TmdbServiceService,private http:HttpClient,private movieService:FBLinkService){}

  toggleFavorite(): void {
    this.http.post(`http://localhost:8080/api/movies/addfavorite`, {embededId:{id:this.movie.id,userId:this.movieService.getUserId()},title:this.movie.title,imageURL:this.movie.imageURL})
      .subscribe((updatedMovie: any) => {
        this.movie = updatedMovie;
      });
    this.isFavorite = !this.isFavorite;
  }
}
