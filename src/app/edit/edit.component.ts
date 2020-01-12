import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from '../list/list.service';
import { ActivatedRoute } from '@angular/router';
import { ComicBook } from '../list/comic-book.model';
import { CreateService } from '../create/create.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('f', {static: false}) createForm: NgForm;
  comicBook: ComicBook;
  publishers =  [];
  dropdownList = [];
  dropdownSettings = {};

  constructor(private listService: ListService,
              private route: ActivatedRoute,
              private location: Location,
              private createService: CreateService) { }

  ngOnInit() {
    this.getComicBook();
    this.publishers = this.createService.getPublishers();
    this.dropdownList = this.createService.getDropdownList();
    this.dropdownSettings = this.createService.getDropdownSettings();
  }

  getComicBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.listService.getComicBook(id)
      .subscribe(comicBook => this.comicBook = comicBook);
  }

  onUpdate() {
    this.listService.updateComicBook(this.comicBook)
      .subscribe(() => this.onCancel());
  }

  onCancel() {
    this.location.back();
  }

}
