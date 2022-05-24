import { Component, OnInit } from '@angular/core';
import { Pizza } from '../class/pizzas';
import { PizzasService } from '../pizzas.service';
import { faCircleInfo, faEye, faPen, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pizzas : Pizza[] = this.pizzasService.pizzaCreate;
  faPen = faPen;
  faEye = faEye;
  faInfo = faCircleInfo;

  constructor(private pizzasService : PizzasService) { }

  ngOnInit(): void {
  }

}
