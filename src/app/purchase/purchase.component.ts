import { Component, OnInit } from '@angular/core';
import { pizzaChoice } from '../class/pizzaChoice';
import { Pizza } from '../class/pizzas';
import { PizzaChoiceService } from '../pizzaChoice.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  pizzaPurchase : pizzaChoice[] = this.pizzaChoiceService.command;
  faTrashCan = faTrashCan;

  constructor(private pizzaChoiceService : PizzaChoiceService) { }

  ngOnInit(): void {
  }

}
