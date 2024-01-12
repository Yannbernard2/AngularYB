import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-4" *ngFor="let car of cars">
          <app-card [id]="car.id" [marque]="car.marque" [modele]="car.modele" [description]="car.description" [couleur]="car.couleur"></app-card>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars = [
    { id: 0, marque: 'Toyota', modele: 'Corolla', description: 'C est une super voiture.', couleur: 'bleu'},
    { id: 1, marque: 'Honda', modele: 'Civic', description: 'C est une voiture qui roule.', couleur: 'vert'},
    { id: 2, marque: 'Ford', modele: 'Mustang', description: 'C est vraiment la meilleur.', couleur: 'rouge'},
  ];
}