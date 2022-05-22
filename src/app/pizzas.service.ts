import { Injectable } from '@angular/core';
import { Pizza } from './class/pizzas';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  pizzaCreate : Pizza [] = [

    new Pizza (1,'Leonardo','img0.jpg',8.50,9.50,30,'sauce tomate','mozzarella'),
    new Pizza (2,'Michelangelo','img1.jpg',8.90,9.90,30,'sauce tomate','mozzarella','jambon','champigon'),
    new Pizza (3,'Donatello','img2.jpg',9.50,10.50,50,'sauce tomate','mozzarella','pepperoni'),
    new Pizza (4,'Raphael','img3.jpg',9.50,10.50,50,'sauce tomate','mozzarella','oignons','merguez','poivrons'),
    new Pizza (1,'Leonardo','img0.jpg',8.50,9.50,30,'sauce tomate','mozzarella'),
    new Pizza (2,'Michelangelo','img1.jpg',8.90,9.90,30,'sauce tomate','mozzarella','jambon','champigon'),
    new Pizza (3,'Donatello','img2.jpg',9.50,10.50,50,'sauce tomate','mozzarella','pepperoni'),
    new Pizza (4,'Raphael','img3.jpg',9.50,10.50,50,'sauce tomate','mozzarella','oignons','merguez','poivrons'),

  ]

  constructor() { }
}
