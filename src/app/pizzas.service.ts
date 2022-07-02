import { Injectable } from '@angular/core';
import { Pizza } from './class/pizzas';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  pizzaCreate : Pizza [] = [

      
    new Pizza (1,'Leonardo','img0.jpg',`Risque d'allérgènes: Gluten, oeuf / Nutri-score C`,8.50,8.90,10,
    ['sauce tomate', 'mozzarella']),
    new Pizza (2,'Michelangelo','img1.jpg',`Risque d'allérgènes: Gluten, oeuf / Nutri-score C`,8.90,9.30,10,['sauce tomate','mozzarella','jambon','champignons']),
    new Pizza (3,'Donatello','img2.jpg',`Risque d'allérgènes: Gluten, oeuf / Nutri-score C`,9.50,9.90,10,['sauce tomate', 'mozzarella','pepperoni']),
    new Pizza (4,'Raphael','img3.jpg',`Risque d'allérgènes: Gluten, oeuf / Nutri-score C`,9.70,10.10,12,['sauce tomate', 'mozzarella','oignons','merguez','duo de poivrons']),
    new Pizza (5,'Shredder','img4.jpg',`Risque d'allérgènes: Gluten, oeuf / Nutri-score B`,9.80,10.20,12,['sauce tomate', 'mozzarella','oignons','poulet','tomates fraiches','roquette']),
    new Pizza (6,'Splinter','img5.jpg',`Risque d'allérgènes: Gluten, oeuf / Nutri-score D`,9.90,10.30,12,['crème fraîche', 'mozzarella','chèvre','merguez','duo de poivrons']),
    new Pizza (7,'Krang','img6.jpg',`Risque d'allérgènes: Gluten, oeuf / Nutri-score C`,10.20,10.60,14,['sauce tomate', 'mozzarella','jambon','ananas']),
    new Pizza (8,'April Oneil','img7.jpg',`Risque d'allérgènes: Gluten, oeuf / Nutri-score D`,10.20,10.60,14,['crème fraîche', 'mozzarella','chèvre','miel français']),
    new Pizza (9,'Casey Jones','img8.jpg',`Risque d'allérgènes: Gluten, oeuf / Nutri-score D`,11.20,11.60,16,['crème fraîche', 'mozzarella','poulet rôti','oignon','bacon','nappage barbecue']),
    new Pizza (10,'Mutagen TGRI','img9.jpg',`Risque d'allérgènes: Gluten, oeuf / Nutri-score D`,16.90,17.30,30,['sauce tomate', 'mozzarella','pepperoni','nappage mutant',]),
    

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
    // console.log(this.pizzaCreate);    
  }







}
