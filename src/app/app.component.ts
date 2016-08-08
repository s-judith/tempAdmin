import { Component, OnInit } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [HeaderComponent, SidebarComponent,  DashboardComponent],
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
 
  public title = 'hello'
  constructor() { 
    
  }

  ngOnInit() {}

}
