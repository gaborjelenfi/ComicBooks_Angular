import { Injectable } from '@angular/core';
import { ComicBook } from './comic-book.model';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ListService {
  private listUrl = 'api/comicBooks'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  comicsChanged = new Subject<ComicBook[]>();
  selectedComic: number;
  indexOfSelectedComic: number;

  constructor(private http: HttpClient) {}

  private comics: ComicBook[] = [];

  getAllComics(): Observable<ComicBook[]> {
      return this.http.get<ComicBook[]>(this.listUrl)
        .pipe(
          catchError(this.handleError<ComicBook[]>('getComicBooks', []))
        );
  }

  getComicBook(id: number): Observable<ComicBook> {
    const url = `${this.listUrl}/${id}`;
    return this.http.get<ComicBook>(url).pipe(
      catchError(this.handleError<ComicBook>(`getComicBook id=${id}`))
    );
  }

  addComicBook(comicBook: ComicBook): Observable<ComicBook> {
    return this.http.post<ComicBook>(this.listUrl, comicBook, this.httpOptions).pipe(
      catchError(this.handleError<ComicBook>('addComicBook'))
    );
  }

  updateComicBook(comicBook: ComicBook): Observable<any> {
    return this.http.put(this.listUrl, comicBook, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateComicBook'))
    );
  }

  deleteComicBook(comicBook: ComicBook | number ): Observable<ComicBook> {
    const id = typeof comicBook === 'number' ? comicBook : comicBook.id;
    const url = `${this.listUrl}/${id}`;

    return this.http.delete<ComicBook>(url, this.httpOptions).pipe(
      catchError(this.handleError<ComicBook>('deleteComicBook'))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
