import { Component, OnInit } from '@angular/core';
import { Pizza } from '../class/pizzas';
import { PizzasService } from '../pizzas.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {



  pizzas: Pizza[] = this.pizzaService.pizzaCreate;
  

  constructor(private pizzaService : PizzasService) { }

  ngOnInit(): void {
    
    
  }

}
