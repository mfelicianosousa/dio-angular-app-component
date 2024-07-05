import { Component, Input} from '@angular/core';

@Component({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss', 
})

export class ButtonComponent{
   @Input() label : string = '';
   buttonText: string = "Acessar";
   buttonTexts: string[] = ['VENDER','COMPRAR']
   buttonNumber: number = 1;
   buttonObject = {
       label: 'adicionar ao carrinho',
   }

   getAlert(num: number){
     alert(this.label+" -"+num);
   }
   
}
