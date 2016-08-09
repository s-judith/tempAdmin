import { Component } from '@angular/core';
import {TreeService} from './tree.service';
import { TreeNodeComponent } from './tree-node';
import {MaterialService} from '../../services';

@Component({
  moduleId: module.id,
  selector: 'tree',
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.css'],
  providers: [TreeService, MaterialService],
  directives: [TreeNodeComponent]
})

export class TreeComponent {
  myState = {};
  allSelected: boolean;
  partialSelected: boolean;
  myData: any;
  masterCheckboxValue: boolean = true;
  masterSelectAction: string;

  constructor(
    private treeService: TreeService,
    private materialService: MaterialService
  ) { }

  ngOnInit() {
    this.materialService.render();
    this.treeService.getData()
      .subscribe(data => this.myData = data);
  }

  selectAll(event) {
    this.allSelected = !this.allSelected;
    alert(this.allSelected);

  }

  selectPart(event) {
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

  checked(value) {
    console.log(`checked called! ${value}`);
  }
}

