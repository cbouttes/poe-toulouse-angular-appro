import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  products : string[] = ['Charentaises', 'Mule', 'Méduse', 'Sandale avec chaussette intégrée', 'Croks'];
  pantoufle = 'Pantoufle Koala à moumoute';

  parent_count = 0;

  parent_count_2 = 0;

  // updateItem( new_valeur, index_a_modifier )
  handleUpdateEvent(value: string, index: number) {
    console.log(`[Parent] : On m'a parlé ?`, value);
    // Modifier la valeur dans le tableau
    //const index = this.products.indexOf(produit);
    //this.products.splice(index, 1, value);
   this.products[index] = value;
  }

  plus() {this.parent_count++}
  updateCounter(new_value: number) {
    this.parent_count = new_value;
  }


}
