import { Component } from '@angular/core';

@Component({
  selector: 'my-entry-data',
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.css'],
})
export class EntryDataComponent {
  placeholder: string = 'email';
  placepass: string = '';
  name: string = '';
  color: string = 'blue';

  whyColor() {
    if (this.placepass === 'Diego') {
      return 'black';
    } else {
      return 'red';
    }
  }
  setValue() {
    alert(`Seu nome é ${this.name}?`);
  }
}
