import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class Counter {
  @Input() label: string = '';
  message:number = 1;
  canEdit = false;
 
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = this.message+1;
    } else {
      this.message = this.message+1;
    }
  }
}