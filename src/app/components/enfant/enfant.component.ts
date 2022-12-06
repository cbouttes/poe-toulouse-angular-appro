import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-enfant[produit]',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  // @Input() produit : string  = 'Valeur par défaut'; // Initialise
  //@Input() produit : string | undefined; // Solution OK
  // @Input() produit? : string; // Rendu optionnel : équivalent de | undefined
  // -> Il faudra tester l'existance de produit avant de l'utiliser dans le ts ET dans le html
    @Input() produit! : string;  // Tkt je gère
  // On indique à TS que le produit sera fourni quoi qu'il arrive
  // On ne l'utilise pas lorsqu'on n'est pas sûr que la donnée sera fournie
  // ( exemple : requête depuis une API, un service, ou un input d'utilisateur⋅trice... )

  new_value: string = '';

  @Output() update_event = new EventEmitter();


  constructor() {
    // this.produit = 'Valeur par défaut - solution 2';
  }

  ngOnInit() {
    if(!this.produit) {
      throw new Error("EnfantComponent requires an Input 'product' of type string");
    }
  }
  askParentToUpdate() {
    // Ah ne pas faire !!!!!
    // -> L'enfant ne doit JAMAIS modifier lui même ses props
    //this.produit = this.new_value;

    //On envoie une demande au parent
    this.update_event.emit(this.new_value);
  }


}
