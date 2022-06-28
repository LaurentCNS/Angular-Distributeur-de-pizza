import { Component, OnInit } from '@angular/core';
import { PizzaChoiceService } from '../pizzaChoice.service';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],

})
export class ProcessComponent implements OnInit {

  progress = 0;
  quantityPizzasForTimer: number = this.pizzaChoiceService.totalQuantityPizzas();
  estimateTime: number = this.estimateTimeDelivery();
  isReady: boolean = false;

  constructor(private pizzaChoiceService: PizzaChoiceService,) { }

  ngOnInit(): void {
    this.progressBar();
    console.log(this.progress);
  }

  // fonction qui d'incrémentation la barre de progression
  progressBar() {

    setInterval(() => {
      if (this.progress !== 101) {
        this.progress++;
        console.log(this.progress);
      }
      if (this.progress === 100) {
        this.isReady = true;
      }
    }, 100 * this.quantityPizzasForTimer);

  }


  estimateTimeDelivery(): number {
    return ((this.quantityPizzasForTimer * 100) / 10) / 60; // retour en minutes    
  }








}