import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {CheckChangedEvent} from '../'


@Component({
  moduleId: module.id,
  selector: 'tree-node',
  templateUrl: 'tree-node.component.html',
  styleUrls: ['tree-node.component.css']
})

export class TreeNodeComponent implements OnInit {
  @Input() group: number;
  @Input() index: number;
  @Input() name: string;
  @Input() value: boolean;
  @Output() checked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('tree-node rendered');
  }

  checkChanged() {
    debugger;
    var result = new CheckChangedEvent(this.group, this.index, this.value);
    this.checked.emit(result);
  }

}
