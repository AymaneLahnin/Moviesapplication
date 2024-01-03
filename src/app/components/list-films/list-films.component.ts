import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie';
import { TmdbServiceService } from 'src/app/services/tmdb-service.service';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit {
  popularMovies:Movie[]=[]
  constructor(private tmdbservie:TmdbServiceService){}
  ngOnInit(){
      this.tmdbservie.getPopularMovies().subscribe((films)=>{
        this.popularMovies=films;
      })
  }
}
