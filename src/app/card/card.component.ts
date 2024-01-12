import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() id?: number;
  @Input() marque?: string;
  @Input() modele?: string;
  @Input() description?: string;
  @Input() couleur?: string;

  counterValue = 0;
  showDetails = false;

  incrementCounter(): void {
    console.log('Incrementing counter');
    this.counterValue++;
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
  
}
