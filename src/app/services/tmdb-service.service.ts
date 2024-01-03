import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TmdbServiceService {

  constructor(private http: HttpClient) { }
  private API_TOKEN = 'a38ef3630c846be99412a3e77a3c5a7d';
  private url = 'https://api.themoviedb.org/3';
  getPopularMovies():Observable<Movie[]>{
    const apiUrl=`${this.url}/movie/popular?api_key=${this.API_TOKEN}`;
    return this.http.get<any>(apiUrl).pipe(
      map((films)=>{
        return films.results.map((movie:any)=>
          new Movie(movie.id,movie.title,movie.poster_path,movie.release_date,movie.overview,movie.backdrop_path)
        );
      })
    );
  }

  getPosterFilm(poster_path:string){
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  }

  getMovieId(id:number): Observable<any>{
    const urlId=`${this.url}/movie/${id}?api_key=${this.API_TOKEN}&language=fr`;
    return this.http.get(urlId);
}

searchMovies(texte:string,page:number){
  const nurl = `${this.url}/search/movie?api_key=${this.API_TOKEN}&language=fr&query=${texte}&page=${page}`;
  return this.http.get(nurl);
}


}
