import { Injectable } from '@angular/core';
import { ComicList } from './list.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ListService {
  comicsChanged = new Subject<ComicList[]>();
  selectedComic: number;
  indexOfSelectedComic: number;

  constructor(private http: HttpClient) {}

  private comics: ComicList[] = [];

  addComicBook(comicBook: ComicList) {
    this.comics.push(comicBook);
    this.comicsChanged.next(this.comics.slice());
    localStorage.setItem(comicBook.id.toString(), JSON.stringify(comicBook));
  }

  updateComicBook(index: number, id: number, newComicBook: ComicList) {
    localStorage.setItem(id.toString(), JSON.stringify(newComicBook));
    this.comics[index] = newComicBook;
    this.comicsChanged.next(this.comics.slice());
  }

  getAllComics() {
    const comicsStorage: ComicList[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = JSON.parse(localStorage.getItem(key));
      comicsStorage.push(item);
    }
    return comicsStorage.slice();
  }

  getSelectedComic() {
    if (this.selectedComic) {
      return JSON.parse(localStorage.getItem(this.selectedComic.toString()));
    }
  }

  deleteComicBook(index: number, id: number) {
    this.comics.splice(index, 1);
    localStorage.removeItem(id.toString());
    this.comicsChanged.next(this.comics.slice());
    console.log(this.comics);
  }


}
