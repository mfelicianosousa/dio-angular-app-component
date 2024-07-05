import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = 'Angular '+VERSION.major;
  buttonLabel: string = 'CARRINHO';
  buttonSecond: string = 'ADICIONAR A FAVORITOS';
  
}
