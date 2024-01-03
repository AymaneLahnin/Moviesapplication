package com.example.msbackend;

import jakarta.persistence.Embeddable;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class EmbededId implements Serializable {

    private Long id;
    private Long userId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public EmbededId() {
    }

    public EmbededId(Long id, Long userId) {
        this.id = id;
        this.userId = userId;
    }



    @Override
    public String toString() {
        return "EmbededId{" +
                "id=" + id +
                ", userId=" + userId +
                '}';
    }
}
