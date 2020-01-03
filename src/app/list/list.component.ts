import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComicList } from './list.model';
import { ListService } from './list.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  comics: ComicList[];
  page = 1;
  pageSize = 10;
  subscription = Subscription;
  tableHead = ['id', 'Name', 'Image', 'Publication Date', 'Genre', 'Excerpt', 'Written By', 'Publisher'];

  constructor(private listService: ListService,
              private router: Router) { }

  ngOnInit() {
    this.listService.comicsChanged.subscribe((comics: ComicList[]) => {
      this.comics = comics;
    });
    this.comics = this.listService.getAllComics();
  }

  addNewBtn() {
    this.router.navigate(['create']);
  }

  ngOnDestroy() {
  }

  onDeleteComic(index: number, id: number) {
    this.listService.deleteComicBook(index, id);
  }

  onSelected(index: number, id: number) {
    this.listService.selectedComic = id;
    this.listService.indexOfSelectedComic = index;
    this.router.navigate(['edit']);
  }

  ///////////////////////////////
  // SORTENING
  //////////////////////////////
  sortByID() {
    return this.comics.sort((a, b) => a.id - b.id);
  }

  reverseByID() {
    this.sortByID().reverse();
  }

  sortByName() {
    return this.comics.sort((a, b) => this.sorteningText(a.name, b.name));
  }

  reverseByName() {
    this.sortByName().reverse();
  }

  sortByDate() {
    return this.comics.sort((a, b) => +b.publicationDate - +a.publicationDate);
  }

  reverseByDate() {
    this.sortByDate().reverse();
  }

  sortByGenre() {
    return this.comics.sort((a, b) => this.sorteningText(a.genre, b.genre));
  }

  reverseByGenre() {
    this.sortByGenre().reverse();
  }

  sortByExcerpt() {
    return this.comics.sort((a, b) => this.sorteningText(a.excerpt, b.excerpt));
  }

  reverseByExcerpt() {
    this.sortByExcerpt().reverse();
  }

  sortByWrittenBy() {
    return this.comics.sort((a, b) => {
      const arr1 = a.writtenBy.sort((text1, text2) => (text1.text > text2.text) ? 1 : ((text2.text > text1.text) ? -1 : 0));
      const arr2 = b.writtenBy.sort((text1, text2) => (text1.text > text2.text) ? 1 : ((text2.text > text1.text) ? -1 : 0));

      if (arr1[0].text > arr2[0].text) {
        return 1;
      } else if (arr2[0].text > arr1[0].text) {
        return -1;
      }
      return 0;
    });
  }

  reverseByWrittenBy() {
    return this.comics.sort((a, b) => {
      const arr1 = a.writtenBy.sort((text1, text2) => (text1.text > text2.text) ? 1 : ((text2.text > text1.text) ? -1 : 0)).reverse();
      const arr2 = b.writtenBy.sort((text1, text2) => (text1.text > text2.text) ? 1 : ((text2.text > text1.text) ? -1 : 0)).reverse();

      if (arr1[0].text > arr2[0].text) {
        return 1;
      } else if (arr2[0].text > arr1[0].text) {
        return -1;
      }
      return 0;
    }).reverse();
  }

  sortByPublisher() {
    return this.comics.sort((a, b) => this.sorteningText(a.publisher, b.publisher));
  }

  reverseByPublisher() {
    this.sortByPublisher().reverse();
  }

  sorteningText(valueA: string , valueB: string) {
    const A = valueA.toUpperCase();
    const B = valueB.toUpperCase();

    return A > B ? 1 : B > A ? -1 : 0;
  }

}
