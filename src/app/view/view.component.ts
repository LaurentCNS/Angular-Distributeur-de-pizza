import { Component, OnInit } from '@angular/core';
import { Pizza } from '../class/pizzas';
import { PizzasService } from '../pizzas.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  pizza !: Pizza;

  constructor(private pizzasService : PizzasService) { }

  ngOnInit(): void {
  }

}
