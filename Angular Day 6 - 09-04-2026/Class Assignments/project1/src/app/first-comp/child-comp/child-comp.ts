import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  imports: [],
  templateUrl: './child-comp.html',
  styleUrl: './child-comp.css',
})
export class ChildComp {
  @Input() nameGiven: string = '';
  @Input() nameGiven2: string = '';

  outputFromChild: string = 'This is the text given by Child component';

  @Output() output1 = new EventEmitter<string>();

  sendData() {
    this.output1.emit(this.outputFromChild);
  }
}
