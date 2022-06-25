import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../class/pizzas';
import { PizzasService } from '../pizzas.service';
import { faSnowflake, faFire, faCirclePlus, faCircleMinus, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { PizzaChoiceService } from '../pizzaChoice.service';
import { pizzaChoice } from '../class/pizzaChoice';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  pizzas !: Pizza;
  pizzaAdded : pizzaChoice = new pizzaChoice ;
   
  faCold = faSnowflake;
  faHot = faFire;
  faRemove = faCircleMinus;
  faAdd = faCirclePlus;
  faInfo = faCircleInfo
  count : number = 0;
  priceTotal = this.pizzaChoiceService.priceTotal;
 

  constructor(private pizzaService : PizzasService,
              private pizzaChoiceService : PizzaChoiceService,
              private activatedRoute : ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    // Récupération de l'id de la pizza et récupération de la pizza correspondante
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.pizzas = this.pizzaService.choiceById(id);
    // Recupration du nombre de pizzas dans le panier qui match avec la pizza selectionnée
    for (let i = 0; i < this.pizzaChoiceService.command.length; i++) {
      if(this.pizzaChoiceService.command[i].name === this.pizzas.name){
        this.count = this.pizzaChoiceService.command[i].quantity;
      }
    }                
  }


  addPizzaHot(){
    this.pizzaAdded.name  = this.pizzas.name;
    this.pizzaAdded.option = "Chaud";
    this.pizzaAdded.price = this.pizzas.priceHot;
    this.pizzaAdded.quantity = 1;  // indication pour le service si add ou remove
    this.count ++; // incrementation du compteur
    this.pizzaChoiceService.addOrRemovePizzaService(this.pizzaAdded);
    // rafraichir le prix total
    this.priceTotal = this.pizzaChoiceService.priceTotal;
  }

  removePizzaHot(){
    // SI il y a déja des pizzas identique dans le panier
    if(this.count > 0){
    this.pizzaAdded.name  = this.pizzas.name;
    this.pizzaAdded.option = "Chaud";
    this.pizzaAdded.price = this.pizzas.priceHot;
    this.pizzaAdded.quantity = 0;  // indication pour le service si add ou remove
    this.count --; // decrementation du compteur
    this.pizzaChoiceService.addOrRemovePizzaService(this.pizzaAdded);
    // rafraichir le prix total
    this.priceTotal = this.pizzaChoiceService.priceTotal;} 
  }
  

}
