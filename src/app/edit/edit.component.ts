import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Pizza } from '../class/pizzas';
import { PizzasService } from '../pizzas.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pizza !: Pizza
  pizzaForm !: Pizza
  ingredientForm : string[]=[]
  ngVar = 1
  
  
  faInfo = faCircleInfo;

  constructor(private pizzasService : PizzasService,
              private activatedRoute : ActivatedRoute,
              private router : Router,
              private toastr : ToastrService) { }

  ngOnInit(): void {
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.pizzaForm = this.pizzasService.choiceById(id);    
  }

  submitEdit(){
    this.router.navigate(['/view', this.pizzaForm.id]);
    if(this.pizzaForm === this.pizzaForm){
    this.toastr.success('La pizza à été modifiée !');}
  }

}
