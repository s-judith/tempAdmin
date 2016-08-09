import { Component } from '@angular/core';
import {SideBarService} from './sidebar.service';
import { ChildComponent } from './child.component'; 


export interface MaterialComponentHandler {
  upgradeDom();
};

declare var componentHandler: MaterialComponentHandler;

@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  host: { class: 'demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50' },
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  providers: [SideBarService],
  directives: [ChildComponent]



})

export class SidebarComponent {

  allSelected: boolean;
  partialSelected: boolean;
  myData: any;
  objectArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  optionList: Array<string> = ["Add", 
                              "Replace", 
                              "Skip"];
  masterCheckboxValue: boolean = true;
  masterSelectAction: string;

    selectAll(event){
    this.allSelected = !this.allSelected;
    alert(this.allSelected);

  }
  
  selectPart(event){
    this.partialSelected = !this.partialSelected;
    alert(this.partialSelected);
  }
//add now
    headerCheckboxChanged(event: any): void {
    this.masterCheckboxValue = event.srcElement.checked;
  }
  
  headerSelectChanged(event: any): void {
      this.masterSelectAction = event.srcElement.value;
  }

  actionChange(event: any) {
    console.log(event.test);
    console.log(event.value);
  }

  checkedChanged(event: any) {
    console.log(event.test);
    console.log(event.value);
  }


  constructor(private sidebarService: SideBarService) { }

  ngOnInit() {
    this.sidebarService.getData()
      .subscribe(data => this.myData = data);
  }

}

