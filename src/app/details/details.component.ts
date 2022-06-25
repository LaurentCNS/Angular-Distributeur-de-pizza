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
  countHot : number = 0;
  countCold : number = 0;
  priceTotal = this.pizzaChoiceService.priceTotal;
 

  constructor(private pizzaService : PizzasService,
              private pizzaChoiceService : PizzaChoiceService,
              private activatedRoute : ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    // Récupération de l'id de la pizza et récupération de la pizza correspondante
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.pizzas = this.pizzaService.choiceById(id);
    // Recupration du nombre de pizzas chaudes dans le panier qui match avec la pizza selectionnée
    for (let i = 0; i < this.pizzaChoiceService.command.length; i++) {
      if(this.pizzaChoiceService.command[i].name === this.pizzas.name && this.pizzaChoiceService.command[i].option === "Chaud"){
        this.countHot = this.pizzaChoiceService.command[i].quantity;
      }
    }
    // Recupration du nombre de pizzas froides dans le panier qui match avec la pizza selectionnée
    for (let i = 0; i < this.pizzaChoiceService.command.length; i++) {
      if(this.pizzaChoiceService.command[i].name === this.pizzas.name && this.pizzaChoiceService.command[i].option === "Froid"){
        this.countCold = this.pizzaChoiceService.command[i].quantity;
      }
    }                      
  }


  // ----------METHODES  D'ASSIGNATION DE VALEURS-------------
  assigValueHot(){
    this.pizzaAdded.name  = this.pizzas.name;
    this.pizzaAdded.price = this.pizzas.priceHot;
    this.pizzaAdded.option = "Chaud";  // Assignation de l'option pizza chaude
  }

  assignValueCold(){
    this.pizzaAdded.name  = this.pizzas.name;
    this.pizzaAdded.price = this.pizzas.priceCold;
    this.pizzaAdded.option = "Froid"; // Assignation de l'option pizza froide
  }


  // -------------------METHODES AU CLIQUE---------------------
  addPizzaHot(){
    this.assigValueHot();
    this.pizzaAdded.quantity = 1;  // indication add pour le service
    this.countHot ++; // incrementation du compteur
    this.pizzaChoiceService.addOrRemovePizzaService(this.pizzaAdded);
    // rafraichir le prix total
    this.priceTotal = this.pizzaChoiceService.priceTotal;
  }

  removePizzaHot(){
    // SI il y a déja des pizzas identique dans le panier
    if(this.countHot > 0){
    this.assigValueHot();
    this.pizzaAdded.quantity = 0;  // indication remove pour le service
    this.countHot --; // decrementation du compteur
    this.pizzaChoiceService.addOrRemovePizzaService(this.pizzaAdded);
    // rafraichir le prix total
    this.priceTotal = this.pizzaChoiceService.priceTotal;} 
  }

  addPizzaCold(){
    this.assignValueCold();
    this.pizzaAdded.quantity = 1;  // indication add pour le service
    this.countCold ++; // incrementation du compteur
    this.pizzaChoiceService.addOrRemovePizzaService(this.pizzaAdded);
    // rafraichir le prix total
    this.priceTotal = this.pizzaChoiceService.priceTotal;
  }

  removePizzaCold(){
    // SI il y a déja des pizzas identique dans le panier
    if(this.countCold > 0){
    this.assignValueCold();
    this.pizzaAdded.quantity = 0;  // indication remove pour le service
    this.countCold --; // decrementation du compteur
    this.pizzaChoiceService.addOrRemovePizzaService(this.pizzaAdded);
    // rafraichir le prix total
    this.priceTotal = this.pizzaChoiceService.priceTotal;} 
  }
  


}
