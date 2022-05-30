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

  constructor(private pizzaService : PizzasService,
              private pizzaChoiceService : PizzaChoiceService,
              private activatedRoute : ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.pizzas = this.pizzaService.choiceById(id);                
  }


  addPizzaHot(){
    this.pizzaAdded.name  = this.pizzas.name;
    this.pizzaAdded.option = "Chaud";
    this.pizzaAdded.price = this.pizzas.priceHot;
    this.pizzaAdded.quantity = 1;
    this.pizzaChoiceService.addPizzaService(this.pizzaAdded);
    // console.log(this.basketToPush); 
  }

}
