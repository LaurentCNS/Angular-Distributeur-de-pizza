import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../class/pizzas';
import { PizzasService } from '../pizzas.service';
import { faCircleInfo, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  pizza !: Pizza;
  deleteVal : boolean = false
  faPen = faPenToSquare;
  faInfo = faCircleInfo;
  faTrash = faTrash;

  constructor(private pizzasService : PizzasService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void{
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.pizza = this.pizzasService.choiceById(id);
  }


  deleteValidation(){
    if(this.deleteVal === false){
      this.deleteVal = true;
    }else{
      this.deleteVal = false;
    }
  }

  deleteOne(){
    
  }

}
