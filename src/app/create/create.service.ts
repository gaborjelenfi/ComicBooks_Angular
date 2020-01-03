import { Injectable } from '@angular/core';

@Injectable()
export class CreateService {

  dropdownList = [
    { id: 1, text: 'Jim Starlin' },
    { id: 2, text: 'Alan Davis' },
    { id: 3, text: 'Chris Claremont' },
    { id: 4, text: 'Frank Miller' },
    { id: 5, text: 'Gail Simone' },
    { id: 6, text: 'Jack Kirby' },
    { id: 7, text: 'Louise Simonson' },
    { id: 8, text: 'Mark Waid' },
    { id: 9, text: 'Matt Fraction' },
    { id: 10, text: 'Stan Lee' }
  ];
  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 6,
    allowSearchFilter: true,
  };

  selectedItems = [];

  getDropdownList() {
    return this.dropdownList;
  }

  getDropdownSettings() {
    return this.dropdownSettings;
  }

}
