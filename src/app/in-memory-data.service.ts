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
        publicationDate: new Date('2020-01-01'),
        genre: 'Action',
        excerpt: 'Batman superpower is money...',
        writtenBy: [{ id: 1, text: 'Jim Starlin' },
                    { id: 2, text: 'Alan Davis' }],
        publisher: 'DC Comics'
      },
      {
        id: 2,
        name: 'The Amazing Spiderman',
        imagePath: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/679370/679370._SX360_QL80_TTD_.jpg',
        publicationDate: new Date('2020-01-05'),
        genre: 'Action',
        excerpt: 'Spiderman saves the world again...',
        writtenBy: [{ id: 1, text: 'Jim Starlin' },
                    { id: 2, text: 'Alan Davis' }],
        publisher: 'Marvel Comics'
      },
      {
        id: 3,
        name: 'Batman and Robin',
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/8156NmrPKrL.jpg',
        publicationDate: new Date('2020-02-01'),
        genre: 'Action',
        excerpt: 'Some text about this Comic Book...',
        writtenBy: [{ id: 1, text: 'Jim Starlin' },
                    { id: 2, text: 'Alan Davis' }],
        publisher: 'DC Comics'
      },
      {
        id: 4,
        name: 'The Amazing Spiderman',
        imagePath: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/679370/679370._SX360_QL80_TTD_.jpg',
        publicationDate: new Date('2019-09-01'),
        genre: 'Action',
        excerpt: 'Some text about this Comic Book...',
        writtenBy: [{ id: 1, text: 'Jim Starlin' },
                    { id: 2, text: 'Alan Davis' }],
        publisher: 'Marvel Comics'
      },
      {
        id: 5,
        name: 'Batman and Robin',
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/8156NmrPKrL.jpg',
        publicationDate: new Date('2018-01-01'),
        genre: 'Action',
        excerpt: 'Batman superpower is money...',
        writtenBy: [{ id: 1, text: 'Jim Starlin' },
                    { id: 2, text: 'Alan Davis' }],
        publisher: 'DC Comics'
      },
      {
        id: 6,
        name: 'The Amazing Spiderman',
        imagePath: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/679370/679370._SX360_QL80_TTD_.jpg',
        publicationDate: new Date('2010-01-01'),
        genre: 'Action',
        excerpt: 'Spiderman saves the world again...',
        writtenBy: [{ id: 1, text: 'Jim Starlin' },
                    { id: 2, text: 'Alan Davis' }],
        publisher: 'Marvel Comics'
      },
      {
        id: 7,
        name: 'Batman and Robin',
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/8156NmrPKrL.jpg',
        publicationDate: new Date(),
        genre: 'Action',
        excerpt: 'Some text about this Comic Book...',
        writtenBy: [{ id: 1, text: 'Jim Starlin' },
                    { id: 2, text: 'Alan Davis' }],
        publisher: 'DC Comics'
      },
      {
        id: 8,
        name: 'The Amazing Spiderman',
        imagePath: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/679370/679370._SX360_QL80_TTD_.jpg',
        publicationDate: new Date(),
        genre: 'Action',
        excerpt: 'Spiderman saves the world again...',
        writtenBy: [{ id: 1, text: 'Jim Starlin' },
                    { id: 2, text: 'Alan Davis' }],
        publisher: 'Marvel Comics'
      },
      {
        id: 9,
        name: 'Batman and Robin',
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/8156NmrPKrL.jpg',
        publicationDate: new Date(),
        genre: 'Action',
        excerpt: 'Batman superpower is money...',
        writtenBy: [{ id: 1, text: 'Jim Starlin' },
                    { id: 2, text: 'Alan Davis' }],
        publisher: 'DC Comics'
      },
      {
        id: 10,
        name: 'The Amazing Spiderman',
        imagePath: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/679370/679370._SX360_QL80_TTD_.jpg',
        publicationDate: new Date(),
        genre: 'Action',
        excerpt: 'Some text about this Comic Book...',
        writtenBy: [{ id: 1, text: 'Jim Starlin' },
                    { id: 2, text: 'Alan Davis' }],
        publisher: 'Marvel Comics'
      },
      {
        id: 11,
        name: 'Batman and Robin',
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/8156NmrPKrL.jpg',
        publicationDate: new Date(),
        genre: 'Action',
        excerpt: 'Some text about this Comic Book...',
        writtenBy: [{ id: 1, text: 'Jim Starlin' },
                    { id: 2, text: 'Alan Davis' }],
        publisher: 'DC Comics'
      },
      {
        id: 12,
        name: 'The Amazing Spiderman',
        imagePath: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/679370/679370._SX360_QL80_TTD_.jpg',
        publicationDate: new Date(),
        genre: 'Action',
        excerpt: 'Some text about this Comic Book...',
        writtenBy: [{ id: 1, text: 'Jim Starlin' },
                    { id: 2, text: 'Alan Davis' }],
        publisher: 'Marvel Comics'
      }
    ];
    return {comicBooks};
  }

}
