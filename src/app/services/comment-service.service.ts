import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  private baseUrl = 'http://localhost:8080/api/movies/comments';

  constructor(private http: HttpClient) {}

  getComments(movieId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/${movieId}`);
  }

  addComment(comment: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/`, comment);
  }
}
