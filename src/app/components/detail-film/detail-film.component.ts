import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TmdbServiceService } from 'src/app/services/tmdb-service.service';
import { Movie } from 'src/app/model/movie';
import { HttpClient } from '@angular/common/http';
import { FBLinkService } from 'src/app/services/fblink.service';
import { CommentServiceService } from 'src/app/services/comment-service.service';
import { Comment } from 'src/app/model/Comment';
@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {
  film!: Movie;
  newComment!: Comment;
  comments!:Comment[];
  desc:string="";

  constructor(private route: ActivatedRoute, public tmdbservice: TmdbServiceService, private http: HttpClient, private router: Router, private movieService: FBLinkService,private commentService:CommentServiceService) { }
  ngOnInit() {
    const id: number = +this.route.snapshot.params['id'];
    this.tmdbservice.getMovieId(+id).subscribe(film => {
      this.film = new Movie(
        film.id,
        film.title,
        film.poster_path,
        film.release_date,
        film.overview,
        film.backdrop_path
      );
    });
    this.loadComments();
  }
  toggleFavorite(): void {
    this.http.post(`http://localhost:8080/api/movies/addfavorite`, { embededId: { id: this.film.id, userId: this.movieService.getUserId() }, title: this.film.title, imageURL: this.film.imageURL })
      .subscribe((updatedMovie: any) => {
        this.film = updatedMovie;
      });
    this.router.navigate(['/Favoris']);
  }
  deleteMovie(): void {
    this.http.delete(`http://localhost:8080/api/movies/delete`, { body:{ embededId: { id: this.film.id, userId: this.movieService.getUserId() } }} )
      .subscribe(
        () => {
          console.log('Movie deleted successfully');
          this.router.navigate(['/Favoris']);
        },
        (error) => {
          console.error('Error deleting movie:', error);
        }
      );
  }

  loadComments() {
    this.commentService.getComments(this.film.id).subscribe((comments) => {
      console.log('Comments:', comments);
    });
  }

  addComment() {
    this.newComment=new Comment(this.desc,new Date().toDateString(),"Ayman",this.film.id),
    this.commentService.addComment(this.newComment).subscribe((addedComment) => {
     
      console.log('Added Comment:', addedComment);
      
      this.loadComments();
    });
  }
}
