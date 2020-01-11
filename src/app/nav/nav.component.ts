import { Component, OnInit } from '@angular/core';
import { ListService } from '../list/list.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  collapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
