import { Component } from '@angular/core';

import { TmdbServiceService } from 'src/app/services/tmdb-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  searchText: string = '';
  searchResults!: Observable<any>;

  constructor(public tmdbService: TmdbServiceService) {}

  onSearchChange() {
    
      const page = 1;
      this.searchResults = this.tmdbService.searchMovies(this.searchText, page);
    
  }
}
