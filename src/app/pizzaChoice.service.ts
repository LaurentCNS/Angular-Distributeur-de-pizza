import { Injectable } from '@angular/core';
import { pizzaChoice } from './class/pizzaChoice';

@Injectable({
  providedIn: 'root'
})
export class PizzaChoiceService {

  command: pizzaChoice[] = []
  priceTotal : number = 0;



  constructor() { }

  

  // Ajouter ou supprimer une pizza dans le panier
  addOrRemovePizzaService(pizzaAdded: pizzaChoice): void {
    let cloneCommand = JSON.parse(JSON.stringify(pizzaAdded));
    // Si le panier est vide
    if (this.command.length == 0 && pizzaAdded.quantity === 1) {
      // Ajout de la pizza dans le panier
      this.command.push(cloneCommand);
      this.priceTotal += cloneCommand.price;
    // SINON
    } else {
      // SI la pizza est déjà dans le panier avec la même option
      if (this.command.find(pizza => pizza.name == pizzaAdded.name && pizza.option == pizzaAdded.option)) {
        // Boucle sur le panier
        for (let i = 0; i < this.command.length; i++) {
          // Recherche de la pizza et option identique
          if (this.command[i].name === pizzaAdded.name && this.command[i].quantity > 0 && this.command[i].option === pizzaAdded.option) {
            // On ajoute une quantité 
            if(pizzaAdded.quantity === 1){
              this.command[i].quantity++ ; 
              this.priceTotal += cloneCommand.price;
            // On retire une quantité
            }else{
            this.command[i].quantity--;
            this.priceTotal -= cloneCommand.price;
            }
          }
        }
      // SINON (si la pizza n'est pas dans le panier)  
      } else {
        this.command.push(cloneCommand);
        this.priceTotal += cloneCommand.price;
      }
      // Si une pizza à une quantité de 0, on la supprime du panier
      for (let i = 0; i < this.command.length; i++) {
        if (this.command[i].quantity == 0) {
          this.command.splice(i, 1);
        }
      }      
    }  
    console.log(this.command);
  }


  
}