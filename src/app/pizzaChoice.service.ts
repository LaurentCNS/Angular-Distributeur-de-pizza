import { Injectable } from '@angular/core';
import { pizzaChoice } from './class/pizzaChoice';

@Injectable({
  providedIn: 'root'
})
export class PizzaChoiceService {

  command: pizzaChoice[] = []



  constructor() { }


  // Ajouter ou supprimer une pizza dans le panier
  addOrRemovePizzaService(pizzaAdded: pizzaChoice): void {
    let cloneCommand = JSON.parse(JSON.stringify(pizzaAdded));
    // console.log(pizzaAdded);

    // Si le panier est vide
    if (this.command.length == 0) {
      // Ajout de la pizza dans le panier
      this.command.push(cloneCommand);
      console.log('si pas de pizza');

    // SINON
    } else {

      // SI la pizza est déjà dans le panier
      if (this.command.find(pizza => pizza.name == pizzaAdded.name)) {
        // Boucle sur le panier
        for (let i = 0; i < this.command.length; i++) {
          // Recherche de la pizza identique
          if (this.command[i].name === pizzaAdded.name) {
            // On ajoute une quantité ou on enlève une
            (pizzaAdded.quantity === 1) ? this.command[i].quantity++ : this.command[i].quantity--;
            break;
          }
        }
      // SINON (si la pizza n'est pas dans le panier)  
      } else {
        this.command.push(cloneCommand);
      }

    }

    console.log(this.command);

  }

}