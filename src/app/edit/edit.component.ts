import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ListService } from '../list/list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ComicBook } from '../list/comic-book.model';
import { CreateService } from '../create/create.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('f', {static: false}) createForm: NgForm;
  comicBook: ComicBook;
  publishers = ['', '215 Ink', 'Abacus Comics', 'Disney Comics', 'DC Comics', 'Marvel Comics'];
  selectedItems = [];
  dropdownList = [];
  dropdownSettings = {};
  selected: boolean;

  constructor(private listService: ListService,
              private router: Router,
              private route: ActivatedRoute,
              private createService: CreateService) { }

  ngOnInit() {
    this.getComicBook();
    this.dropdownList = this.createService.getDropdownList();
    this.dropdownSettings = this.createService.getDropdownSettings();
  }

  getComicBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.listService.getComicBook(id)
      .subscribe(comicBook => this.comicBook = comicBook);
  }

  onUpdate() {
    this.listService.updateComicBook(this.listService.indexOfSelectedComic, this.listService.selectedComic, this.comicBook);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['list']);
    this.listService.selectedComic = -1;
  }

}
