package com.example.msbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public List<Movie> getFavoriteMovies(Long userId) {
        return movieRepository.findByEmbededIdUserId(userId);
    }

    public Movie toggleFavorite(Movie movie) {


        Optional<Movie> dbmovie = movieRepository.findByEmbededId(movie.getEmbededId());

        if (!dbmovie.isPresent()) {
            movie.setFavorite(true);
            return movieRepository.save(movie);
        }else{
            throw new RuntimeException("movie already exists");
        }
    }

    public void deleteMovie(Movie movie) {
        Optional<Movie> dbMovie = movieRepository.findByEmbededId(movie.getEmbededId());

        if (dbMovie.isPresent()) {
            movieRepository.delete(dbMovie.get());
        } else {
            throw new RuntimeException("Movie not found");
        }
    }
}
