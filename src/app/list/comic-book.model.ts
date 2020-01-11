export class ComicBook {
  public id: number;
  public name: string;
  public imagePath: string;
  public publicationDate: Date;
  public genre: string;
  public excerpt: string;
  public writtenBy: Array<{ id: number, text: string }>;
  public publisher: string;

  constructor(
    id: number,
    name: string,
    imagePath: string,
    publicationDate: Date,
    genre: string,
    excerpt: string,
    writtenBy: Array<{ id: number, text: string }>,
    publisher: string
  ) {
    this.id = id;
    this.name = name;
    this.imagePath = imagePath;
    this.publicationDate = publicationDate;
    this.genre = genre;
    this.excerpt = excerpt;
    this.writtenBy = writtenBy;
    this.publisher = publisher;
  }
}
