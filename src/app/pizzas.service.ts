import { Injectable } from '@angular/core';
import { Pizza } from './class/pizzas';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  pizzaCreate : Pizza [] = [

      
    new Pizza (1,'Leonardo','img0.jpg',`Risque d'allérgènes: Gluten, oeuf / Nutri-score C`,8.50,8.90,10,
    ['sauce tomate', 'mozzarella', 'ingredient test','ingredient test','ingredient test','ingredient test','ingredient test',
    'ingredient test','ingredient test','ingredient test',]),
    new Pizza (2,'Michelangelo','img1.jpg',``,8.90,9.30,10,['sauce tomate','mozzarella']),
    new Pizza (3,'Donatello','img2.jpg',``,9.50,9.90,10,),
    new Pizza (4,'Raphael','img3.jpg',``,9.70,10.10,12,),
    new Pizza (5,'Shredder','img4.jpg',``,9.80,10.20,12,),
    new Pizza (6,'Splinter','img5.jpg',``,9.90,10.30,12,),
    new Pizza (7,'Krang','img6.jpg',``,10.20,10.60,14,),
    new Pizza (8,'April Oneil','img7.jpg',``,10.20,10.60,14,),
    new Pizza (9,'Casey Jones','img8.jpg',``,11.20,11.60,16,),
    new Pizza (10,'Mutagen TGRI','img9.jpg',``,16.90,17.30,30),
    

  ]

  constructor() { }

  choiceById(id:number) : Pizza{
    let elemToReturn : Pizza;
    elemToReturn = this.pizzaCreate.filter(pizzaCreate => pizzaCreate.id === id)[0];
    return elemToReturn
  }

  removeOne(id:number):void{
    this.pizzaCreate = this.pizzaCreate.filter(pizza => pizza.id != id);
  }

  
  addPizza(pizzaForm : Pizza):void{
    this.pizzaCreate.push(pizzaForm);
    console.log(this.pizzaCreate);
    
  }







}
