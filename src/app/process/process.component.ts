import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
  audio = new Audio();

  constructor(private pizzaChoiceService: PizzaChoiceService,
              private router : Router) { }

  ngOnInit(): void {
    this.progressBar();
    console.log(this.progress);
    this.audio.src = "../../assets/sound/Success-sound-effect.mp3";
    this.audio.load();
  }

  // fonction qui d'incrémentation la barre de progression
  progressBar() {

    setInterval(() => {
      if (this.progress !== 101) {
        this.progress++;
        console.log(this.progress);
      }
      if (this.progress === 100) {
        this.playsound();
        this.isReady = true;
        this.pizzaChoiceService.removeAll();

      }
    }, 100 * this.quantityPizzasForTimer);

  }


  estimateTimeDelivery(): number {
    return ((this.quantityPizzasForTimer * 100) / 10) / 60; // retour en minutes    
  }


  resetAndReturn(){
    this.pizzaChoiceService.removeAll();
    this.router.navigate(['/home']);
  }

  playsound(){   
    this.audio.play();
  }


}