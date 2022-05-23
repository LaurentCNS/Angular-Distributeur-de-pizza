import { Component, OnInit } from '@angular/core';
import { Pizza } from '../class/pizzas';
import { PizzasService } from '../pizzas.service';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { isNgTemplate } from '@angular/compiler';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {



  pizzas: Pizza[] = this.pizzaService.pizzaCreate;
  faLeft = faCircleChevronLeft;
  faRight = faCircleChevronRight;

 

  constructor(private pizzaService : PizzasService) { }

  ngOnInit(): void {
  }

  clickLeft(){

  }

  clickRight(){
    
  }


}
