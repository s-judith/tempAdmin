import { Component, OnInit } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { SearchComponent } from './search';
import { DashboardComponent } from './dashboard';
import {MaterialService} from './services'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  host:{class:'mdl-layout mdl-js-layout mdl-layout--fixed-drawer'},
  styleUrls: ['app.component.css'],
  providers:[MaterialService],
  directives: [SearchComponent,  DashboardComponent]
})
export class AppComponent implements OnInit {
  constructor(private materialService: MaterialService) {}

  ngOnInit() {
    console.log('root component rendered')
    this.materialService.render();
  }

}
