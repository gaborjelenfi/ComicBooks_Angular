import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ComicBook } from '../list/comic-book.model';
import { ListService } from '../list/list.service';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('f', {static: false}) createForm: NgForm;
  comic: ComicBook;
  publishers = [];
  dropdownList = [];
  dropdownSettings = {};

  constructor(private router: Router,
              private listService: ListService,
              private createService: CreateService) {}

  ngOnInit() {
    this.publishers = this.createService.getPublishers();
    this.dropdownList = this.createService.getDropdownList();
    this.dropdownSettings = this.createService.getDropdownSettings();
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  onSubmit() {

    const newComicBook = new ComicBook(
      +Date.now(),
      this.createForm.value.name,
      this.createForm.value.imgUrl,
      this.createForm.value.publication,
      this.createForm.value.genre,
      this.createForm.value.excerpt,
      this.createForm.value.writtenBy,
      this.createForm.value.publisher
    );
    this.listService.addComicBook(newComicBook).subscribe();
    this.createForm.reset();
    this.onCancel();

  }

}
