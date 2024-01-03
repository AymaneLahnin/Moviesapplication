import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';
import { Movie } from '../model/movie';
@Injectable({
  providedIn: 'root'
})
export class FBLinkService {
  private userIdSubject: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined);


  private baseUrl = 'http://localhost:8080/api';

  private userId: number | undefined;

  constructor(private http: HttpClient) {}

  get signUpUrl(): string {
    return `${this.baseUrl}/users/signup`;
  }

  get signInUrl(): string {
    return `${this.baseUrl}/users/signin`;
  }

  signUp(data: any): Observable<any> {
    return this.http.post(this.signUpUrl, data);
  }
  
  signIn(email: string, password: string): Observable<any> {
    const signInRequest = { email, password };
    return this.http.post(this.signInUrl, signInRequest);
  }

  setUserId(id: number): void {
    this.userIdSubject.next(id);
  }

  getUserId(): number | undefined {
    return this.userIdSubject.value;
  }



  getFavoriteMovies(userId: number): Observable<any[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movies/favorites/${userId}`);
  }
  
  
}
