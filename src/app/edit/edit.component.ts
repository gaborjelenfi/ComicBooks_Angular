import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ListService } from '../list/list.service';
import { Router } from '@angular/router';
import { ComicList } from '../list/list.model';
import { CreateService } from '../create/create.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('f', {static: false}) createForm: NgForm;
  comic: ComicList;
  publishers = ['', '215 Ink', 'Abacus Comics', 'Disney Comics', 'DC Comics', 'Marvel Comics'];
  selectedItems = [];
  dropdownList = [];
  dropdownSettings = {};
  selected: boolean;

  constructor(private listService: ListService,
              private router: Router,
              private createService: CreateService) { }

  ngOnInit() {
    this.comic = this.listService.getSelectedComic();
    this.dropdownList = this.createService.getDropdownList();
    this.dropdownSettings = this.createService.getDropdownSettings();
  }

  onUpdate() {
    this.listService.updateComicBook(this.listService.indexOfSelectedComic, this.listService.selectedComic, this.comic);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['list']);
    this.listService.selectedComic = -1;
  }

}
