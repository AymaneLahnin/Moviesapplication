package com.example.msbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
@CrossOrigin("http://localhost:4200")
public class CommentController {


    @Autowired
    private CommentaireRepository commentaireRepository;



    @GetMapping("/comments/{id}")
    List<Comment> getComments(@PathVariable Long id){
        return commentaireRepository.findByRef(id);

    }


    @PostMapping("/comments")
    Comment addComment( @RequestBody Comment commentaire){
        System.out.println(commentaire);
        return commentaireRepository.save(commentaire);

    }



}