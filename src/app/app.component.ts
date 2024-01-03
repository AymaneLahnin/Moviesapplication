import { Component } from '@angular/core';
import { ListFilmsComponent } from './components/list-films/list-films.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviesApp';
}