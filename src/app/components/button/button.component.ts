import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
  @Input() label: string = '';
  buttonText: string = 'ACESSAR';
  buttonTexts: string[] = ['VENDER', 'COMPRAR'];
  ButtonObject = {
    label: 'adicionar ao carrinho',
  };

  getAlert() {
    alert(`Olá, o nome desse botão é ${this.label}`);
  }
}
