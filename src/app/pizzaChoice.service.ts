import { Injectable } from '@angular/core';
import { pizzaChoice } from './class/pizzaChoice';

@Injectable({
  providedIn: 'root'
})
export class PizzaChoiceService {

  command: pizzaChoice[] = []
  priceTotal : number = 0;

  // Recuperer le nombre de pizza identique dans le panier
  



  constructor() { }


  // Ajouter ou supprimer une pizza dans le panier
  addOrRemovePizzaService(pizzaAdded: pizzaChoice): void {
    let cloneCommand = JSON.parse(JSON.stringify(pizzaAdded));
    // console.log(pizzaAdded);

    // Si le panier est vide
    if (this.command.length == 0 && pizzaAdded.quantity === 1) {
      // Ajout de la pizza dans le panier
      this.command.push(cloneCommand);
      this.priceTotal += cloneCommand.price;
      console.log('si pas de pizza');

    // SINON
    } else {

      // SI la pizza est déjà dans le panier
      if (this.command.find(pizza => pizza.name == pizzaAdded.name)) {
        // Boucle sur le panier
        for (let i = 0; i < this.command.length; i++) {
          // Recherche de la pizza identique
          if (this.command[i].name === pizzaAdded.name && this.command[i].quantity > 0 ) {
            console.log('ici');
            // On ajoute une quantité ou on enlève une
            if(pizzaAdded.quantity === 1){
              this.command[i].quantity++ ; 
              this.priceTotal += cloneCommand.price;
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