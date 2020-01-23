import { Component, OnInit } from '@angular/core';
import { ComicBook } from './comic-book.model';
import { ListService } from './list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  comicBooks: ComicBook[] = [];
  page = 1;
  pageSize = 10;
  tableHead = ['id', 'Name', 'Image', 'Publication Date', 'Genre', 'Excerpt', 'Written By', 'Publisher'];

  constructor(private listService: ListService,
              private router: Router) { }

  ngOnInit() {
    this.getAllComics();
  }

  getAllComics() {
    this.listService.getAllComics()
      .subscribe(comics => this.comicBooks = comics);
  }

  addNewBtn() {
    this.router.navigate(['create']);
  }

  onDeleteComic(comicBook: ComicBook): void {
    this.comicBooks = this.comicBooks.filter(c => c !== comicBook);
    this.listService.deleteComicBook(comicBook).subscribe();
  }

  sortByID() {
    return this.comicBooks.sort((a, b) => a.id - b.id);
  }

  reverseByID() {
    this.sortByID().reverse();
  }

  sortByName() {
    return this.comicBooks.sort((a, b) => this.sorteningText(a.name, b.name));
  }

  reverseByName() {
    this.sortByName().reverse();
  }

  sortByDate() {
    return this.comicBooks.sort((a, b) => +new Date(b.publicationDate) - +new Date(a.publicationDate));
  }

  reverseByDate() {
    this.sortByDate().reverse();
  }

  sortByGenre() {
    return this.comicBooks.sort((a, b) => this.sorteningText(a.genre, b.genre));
  }

  reverseByGenre() {
    this.sortByGenre().reverse();
  }

  sortByExcerpt() {
    return this.comicBooks.sort((a, b) => this.sorteningText(a.excerpt, b.excerpt));
  }

  reverseByExcerpt() {
    this.sortByExcerpt().reverse();
  }

  sortByWrittenBy() {
    return this.comicBooks.sort((a, b) => {
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
    return this.comicBooks.sort((a, b) => {
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
    return this.comicBooks.sort((a, b) => this.sorteningText(a.publisher, b.publisher));
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
