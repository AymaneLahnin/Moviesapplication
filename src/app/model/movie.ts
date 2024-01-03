export class Movie {
    id: number;
    title: string;
    imageURL: string;
    publishDate: Date;
    description: string;
    bkimg:string;
    constructor(id:number,title: string, imageURL: string, publishDate: Date, description: string,bkimg:string) {
      this.id=id;
      this.title = title;
      this.imageURL = imageURL;
      this.publishDate = publishDate;
      this.description = description;
      this.bkimg=bkimg;
    }
  }
  