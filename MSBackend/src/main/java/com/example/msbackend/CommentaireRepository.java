package com.example.msbackend;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentaireRepository extends JpaRepository<Comment,Long> {
    public List<Comment> findByRef(Long id);
}
