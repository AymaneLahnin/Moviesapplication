package com.example.msbackend;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MovieRepository extends JpaRepository<Movie, EmbededId> {
    List<Movie> findByFavoriteTrue();
    List<Movie> findByEmbededIdUserId(Long userId);

    Optional<Movie> findByEmbededId(EmbededId embededId);

}
