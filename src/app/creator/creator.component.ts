import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pizza } from '../class/pizzas';
import { PizzasService } from '../pizzas.service';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  pizzaForm: Pizza = new Pizza();
  composants: string[] = [];
  step: number = 1;
  numberForIngredient!: number;
  faInfo = faCircleInfo;

  constructor(private pizzasService: PizzasService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  composantsSubmit() {

    // console.log(this.composants);
  }

  pizzaAddValue() {
    this.step++;
    // console.log(this.pizzaForm);

  }

  pizzaSubmit() {
    // pousser le tableau composants (ingredients) dans pizzaForm
    this.pizzaForm.composants = this.composants;
    this.pizzaForm.id = Date.now();
    this.pizzaForm.picture = 'empty.jpg';
    this.pizzaForm.bonus = 10;
    this.pizzasService.addPizza(this.pizzaForm);
    this.toastrService.success("Pizza créée, Félicitation !");
    this.step++;
    // console.log(this.pizzaForm);
  }

  counter(i: number) {
    return new Array(i);
  }

  back() {
    this.step--;
  }

}
