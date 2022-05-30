import { Injectable } from '@angular/core';
import { pizzaChoice } from './class/pizzaChoice';

@Injectable({
  providedIn: 'root'
})
export class PizzaChoiceService {

  pizzaOrder : pizzaChoice[] = []
  


  constructor() { }


  addPizzaService(pizzaAdded : pizzaChoice) : void{
    
    if(pizzaAdded.name !== pizzaChoice.name){
    this.pizzaOrder.push(pizzaAdded)
    console.log(this.pizzaOrder);
    console.log(pizzaChoice.name);
    
  }
  if(pizzaAdded.name === pizzaChoice.name){
  
    console.log(alert);
    
  }
  }
 
    
  



}
