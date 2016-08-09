import { Component, OnInit } from '@angular/core';
import {TreeComponent} from './tree'

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  directives: [TreeComponent]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
