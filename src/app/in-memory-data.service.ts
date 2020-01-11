import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ComicList } from './list/list.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const comicBooks = [

    ];
    return {comicBooks};
  }

  // Generate id if array is empty start with id: 1
  genId(comicBooks: ComicList[]): number {
    return comicBooks.length > 0 ? Math.max(...comicBooks.map(comic => comic.id)) + 1 : 1;
  }

}
