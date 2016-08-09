import {Component, EventEmitter, Output, Input} from '@angular/core';


// Child Component
@Component({
    selector: 'child',
  template: `

    
<div  (change)="selectedActionChange($event)">
    <input type="checkbox" *ngFor="#opt of optionList" [ngModel]="selectPart"/> {{ opt }} 
     </div>

   
  `
})
export class ChildComponent {
  partialSelected: boolean;
  @Input() test: string;
  @Input() checkboxValue: boolean;
  @Input() selectedAction: string;
  @Output() action: EventEmitter<any> = new EventEmitter();
  @Output() checked: EventEmitter<any> = new EventEmitter();
  optionList: Array<string> = ["Add", 
                            "Replace", 
                            "Skip"];
  
  selectedActionChange(event) {
    this.action.emit({
      value: event.srcElement.value,
      test: this.test
    });
  }
  
//   checkboxChanged(event: any) {
//     this.checked.emit({
//         value: event,
//         test: this.test
//     });
//   }

   selectPart(event){
    this.partialSelected = !this.partialSelected;
    alert(this.partialSelected);
  }
  
}