package com.example.msbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
@CrossOrigin("http://localhost:4200")
public class MovieController {
    @Autowired
    private MovieService movieService;

    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @GetMapping("/favorites/{userId}")
    public List<Movie> getFavoriteMovies(@PathVariable("userId") Long userId) {
        return movieService.getFavoriteMovies(userId);
    }

    @PostMapping("/addfavorite")
    public Movie toggleFavorite(@RequestBody Movie movie) {
        return movieService.toggleFavorite(movie);
    }


    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteMovie(@RequestBody Movie movie) {
        try {
            movieService.deleteMovie(movie);
            return new ResponseEntity<>("Movie deleted successfully", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("Error deleting movie: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
