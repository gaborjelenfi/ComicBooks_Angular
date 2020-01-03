import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ComicList } from '../list/list.model';
import { ListService } from '../list/list.service';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('f', {static: false}) createForm: NgForm;
  comic: ComicList;
  publishers = [' ', '215 Ink', 'Abacus Comics', 'Disney Comics', 'DC Comics', 'Marvel Comics'];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  selectedElementsArr;

  constructor(private router: Router,
              private listService: ListService,
              private createService: CreateService) {}

  ngOnInit() {
    this.dropdownList = this.createService.getDropdownList();
    this.dropdownSettings = this.createService.getDropdownSettings();
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  onSubmit() {

    const newComicBook = new ComicList(
      +Date.now(),
      this.createForm.value.name,
      this.createForm.value.imgUrl,
      this.createForm.value.publication,
      this.createForm.value.genre,
      this.createForm.value.excerpt,
      this.createForm.value.writtenBy,
      this.createForm.value.publisher
    );
    this.listService.addComicBook(newComicBook);
    this.createForm.reset();
    this.onCancel();
    console.log(newComicBook);

  }


}
