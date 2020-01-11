import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ComicBook } from './list/comic-book.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const comicBooks: ComicBook[] = [
      {
        id: 1,
        name: 'Batman and Robin',
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/8156NmrPKrL.jpg',
        publicationDate: new Date(),
        genre: 'Action',
        excerpt: 'Some text about this Comic Book...',
        writtenBy: [{ id: 1, text: 'Jim Starlin' },
                    { id: 2, text: 'Alan Davis' }],
        publisher: 'Marvel comics'
      }

    ];
    return {comicBooks};
  }

  // Generate id if array is empty start with id: 1
  genId(comicBooks: ComicBook[]): number {
    return comicBooks.length > 0 ? Math.max(...comicBooks.map(comic => comic.id)) + 1 : 1;
  }

}
