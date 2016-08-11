import { Component, OnInit } from '@angular/core';
import {TreeComponent} from './tree'

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  host: { class: 'mdl-layout__drawer mdl-layout--fixed-drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50' },
  directives: [TreeComponent]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
