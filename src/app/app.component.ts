import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular le Retour';
  is_logged = false;
  exemple_de_code = `<p>{{interpoler les balises en les sortants du template}}</p>`;
  image_url = 'https://wallpaperaccess.com/full/128440.jpg';

  image = {
    url: 'https://wallpaperaccess.com/full/128440.jpg',
    description: `Je ne sais ce qu'il y a dans cette image`,
    titre: 'Une super image'
  }

  my_classe = 'red';
  mes_classes = ['a', 'b', 'c'];

  my_color = 'blue';
  color = 'green';
  size = 23;


  name = 'Toto';
  lastname = 'La Tourte';
  username = 'TotoDu62';

  code_js = `<input [value]="lastname" (input)="bindLastName($event)"/>`;
  code_angular = `<input [ngModel]="name" (ngModelChange)="bindName($event)" />`;

  code_angular_good = `<input [(ngModel)]="username"/>`

  my_style = {
    color: '#fefefe',
    fontSize : this.size + 'px',
    backgroundColor: 'rebeccapurple'
  }


  // Attributs / Propriétés qu'on peut appeler à travers la classe avec le mot clef this.
  // Méthodes

  getTitleUppercase() {
    return this.title.toUpperCase();
  }

  getSum(a: number, b: number) {
    return a + b;
  }

  getImage() {
    return 'https://wallpaperaccess.com/full/128440.jpg'
  }

  bindName(new_value: string) {
    this.name = new_value;
  }

  bindLastName(e: Event) {
    const input = e.target as HTMLInputElement;
    this.lastname = input.value;
  }

  resetUserName() {
    this.username = 'Nom par défaut';
  }

  zoom() {
    this.size++;
  }

}
