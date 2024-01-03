package com.example.msbackend;



import jakarta.persistence.*;

@Entity
public class Movie {
    @EmbeddedId
    private EmbededId embededId;
    private String title;
    private String imageURL;


    private boolean favorite;



    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public boolean isFavorite() {
        return favorite;
    }

    public void setFavorite(boolean favorite) {
        this.favorite = favorite;
    }

    public EmbededId getEmbededId() {
        return embededId;
    }

    public void setEmbededId(EmbededId embededId) {
        this.embededId = embededId;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "embededId=" + embededId +
                ", title='" + title + '\'' +
                ", imageURL='" + imageURL + '\'' +
                ", favorite=" + favorite +
                '}';
    }
}
