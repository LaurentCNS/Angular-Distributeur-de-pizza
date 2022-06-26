import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../class/pizzas';
import { PizzasService } from '../pizzas.service';
import { faSnowflake, faFire, faCirclePlus, faCircleMinus, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { PizzaChoiceService } from '../pizzaChoice.service';
import { pizzaChoice } from '../class/pizzaChoice';
import { ToastrService } from 'ngx-toastr';

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
              private activatedRoute : ActivatedRoute,
              private toastr: ToastrService,
    
    ) { }

  ngOnInit(): void {
    // Récupération de l'id de la pizza et récupération de la pizza correspondante
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.pizzas = this.pizzaService.choiceById(id);
    // Recupration du nombre de pizzas chaudes dans le panier qui match avec la pizza selectionnée
    for (let i = 0; i < this.pizzaChoiceService.command.length; i++) {
      if(this.pizzaChoiceService.command[i].name === this.pizzas.name && this.pizzaChoiceService.command[i].option === "Chaude"){
        this.countHot = this.pizzaChoiceService.command[i].quantity;
      }
    }
    // Recupration du nombre de pizzas froides dans le panier qui match avec la pizza selectionnée
    for (let i = 0; i < this.pizzaChoiceService.command.length; i++) {
      if(this.pizzaChoiceService.command[i].name === this.pizzas.name && this.pizzaChoiceService.command[i].option === "Froide"){
        this.countCold = this.pizzaChoiceService.command[i].quantity;
      }
    }                      
  }


  // ----------METHODES  D'ASSIGNATION DE VALEURS-------------
  assigValueHot(){
    this.pizzaAdded.name  = this.pizzas.name;
    this.pizzaAdded.picture = this.pizzas.picture;
    this.pizzaAdded.price = this.pizzas.priceHot;
    this.pizzaAdded.id = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;
    this.pizzaAdded.option = "Chaude";  // Assignation de l'option pizza chaude
  }

  assignValueCold(){
    this.pizzaAdded.name  = this.pizzas.name;
    this.pizzaAdded.picture = this.pizzas.picture;
    this.pizzaAdded.price = this.pizzas.priceCold;
    this.pizzaAdded.id = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;
    this.pizzaAdded.option = "Froide"; // Assignation de l'option pizza froide
  }


  // -------------------METHODES AU CLIQUE---------------------
  addPizzaHot(){
    // Si le nombre de pizzas est inférieur à 99
    if(this.countHot < 99){
    this.assigValueHot();
    this.pizzaAdded.quantity = 1;  // indication add pour le service
    this.countHot ++; // incrementation du compteur
    this.pizzaChoiceService.addOrRemovePizzaService(this.pizzaAdded);
    // rafraichir le prix total
    this.priceTotal = this.pizzaChoiceService.priceTotal;
    }
  }

  removePizzaHot(){
    // SI le nombre de pizzas est supérieur à 0
    if(this.countHot > 0){
    this.assigValueHot();
    this.pizzaAdded.quantity = 0;  // indication remove pour le service
    this.countHot --; // decrementation du compteur
    this.pizzaChoiceService.addOrRemovePizzaService(this.pizzaAdded);
    // rafraichir le prix total
    this.priceTotal = this.pizzaChoiceService.priceTotal;} 
  }

  addPizzaCold(){
    // Si le nombre de pizzas est inférieur à 99
    if(this.countCold < 99){
    this.assignValueCold();
    this.pizzaAdded.quantity = 1;  // indication add pour le service
    this.countCold ++; // incrementation du compteur
    this.pizzaChoiceService.addOrRemovePizzaService(this.pizzaAdded);
    // rafraichir le prix total
    this.priceTotal = this.pizzaChoiceService.priceTotal;
    }
  }

  removePizzaCold(){
    // SI le nombre de pizzas est supérieur à 0
    if(this.countCold > 0){
    this.assignValueCold();
    this.pizzaAdded.quantity = 0;  // indication remove pour le service
    this.countCold --; // decrementation du compteur
    this.pizzaChoiceService.addOrRemovePizzaService(this.pizzaAdded);
    // rafraichir le prix total
    this.priceTotal = this.pizzaChoiceService.priceTotal;} 
  }
  


}
